import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import { GoogleGenAI } from "@google/genai";

const app = express();
const port = Number(process.env.PORT) || 3001;
const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;
const allowedOrigins = new Set([
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  ...(process.env.FRONTEND_ORIGIN ? [process.env.FRONTEND_ORIGIN] : []),
]);

app.use((request, response, next) => {
  const origin = request.get("origin");
  if (origin && allowedOrigins.has(origin)) {
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  }
  if (request.method === "OPTIONS") return response.sendStatus(204);
  next();
});
app.use(express.json({ limit: "16kb" }));
app.use("/api/chat", rateLimit({ windowMs: 60_000, limit: 20, standardHeaders: "draft-8", legacyHeaders: false }));

const portfolioContext = [
  "Portfolio source of truth:",
  "- Praveen R Tippimani is an aspiring software developer and AI & ML enthusiast in Bengaluru, Karnataka, India.",
  "- He is a Computer Science and Engineering student specializing in AI & ML. Listed CGPA: 8.6. No college name or graduation date is provided.",
  "- Technologies shown: HTML5, CSS3, JavaScript, Python, Bootstrap, MySQL, VS Code, and GitHub. Experience also mentions SQL.",
  "- InterviewMate AI: AI interview preparation platform with role-based questions, real-time AI feedback, and performance dashboard. Stack: Python, Django, MySQL, React.",
  "- Multiple Disease Prediction System: ML symptom-driven disease prediction system with responsive UI. Stack: Python, Django, PostgreSQL, React.",
  "- Experience: Python Full Stack Trainee at Dhee Coding Lab, Bangalore, 2026–Present. Upskilling and building projects; listed skills include Python, HTML, CSS, JavaScript, SQL.",
  "- Certifications: Python Full Stack Development (Dhee Coding Lab, June 2024); MySQL (Coursera, April 2024); Python Programming (Simplilearn, March 2024); AWS Cloud Foundations (AWS Academy, May 2024).",
  "- Contact: praveen888rt@gmail.com, +91 7019164383.",
  "- GitHub and LinkedIn links are placeholders, and the resume URL is not connected. Do not invent replacements.",
].join("\n");

const systemInstruction = [
  "You are Praveen's portfolio AI assistant. Answer general questions helpfully and naturally, as well as questions about Praveen's skills, education, projects, technologies, certifications, experience, and contact information.",
  "Use the portfolio information below as the source of truth for personal information. Never invent personal details, employers, experience, salary, phone numbers, emails, certifications, project details, or education. If a personal detail is unavailable, say you don't have that information. This restriction applies only to claims about Praveen; it must not stop you from answering unrelated general questions.",
  "For general questions, answer directly and explain clearly. Be friendly, concise, professional, and helpful. If asked about current events or information you cannot verify, say what you know and mention the limitation.",
  portfolioContext,
].join("\n\n");

app.post("/api/chat", async (request, response) => {
  const { message, history = [] } = request.body ?? {};
  if (typeof message !== "string" || !message.trim()) return response.status(400).json({ error: "Message is required." });
  if (message.length > 2000) return response.status(413).json({ error: "Message is too long." });
  if (!Array.isArray(history) || history.length > 10) return response.status(400).json({ error: "Invalid conversation history." });
  const validHistory = history.every((item) => item && ["user", "model"].includes(item.role) && typeof item.text === "string" && item.text.length > 0 && item.text.length <= 2000);
  if (!validHistory) return response.status(400).json({ error: "Invalid conversation history." });
  if (!process.env.GEMINI_API_KEY) return response.status(503).json({ error: "Chat service is not configured." });

  try {
    const input = [
      ...history.map(({ role, text }) => ({
        type: role === "user" ? "user_input" : "model_output",
        content: [{ type: "text", text }],
      })),
      { type: "user_input", content: [{ type: "text", text: message.trim() }] },
    ];
    const result = await ai.interactions.create({
      model,
      store: false,
      input,
      system_instruction: systemInstruction,
      generation_config: {
        thinking_level: "minimal",
        max_output_tokens: 256,
      },
    });
    const answer = result.output_text?.trim();
    if (!answer) throw new Error("No generated text.");
    return response.json({ response: answer });
  } catch (error) {
    // Log transport/status diagnostics only; never log credentials or user messages.
    const status = error?.status ?? "unknown status";
    const causeCode = error?.cause?.code ?? "unknown cause";
    console.error(`Gemini request failed (${status}; ${causeCode}).`);
    return response.status(502).json({ error: "Unable to get a response right now." });
  }
});

app.listen(port, () => console.log("Chat API listening on port " + port));
