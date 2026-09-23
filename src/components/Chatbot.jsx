import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiX, FiSend, FiCpu } from "react-icons/fi";
import "./Chatbot.css";

const suggestions = ["What are Praveen's skills?", "Tell me about his projects", "What is his education?", "What technologies does he use?", "How can I contact him?"];
const welcome = "Hi 👋 I'm Praveen's AI Assistant.\nI can tell you about his skills, projects, education, experience, and more.";
const connectionError = "Sorry, I'm having trouble connecting right now. Please try again.";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ id: 0, sender: "bot", text: welcome }]);
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef(null);
  useEffect(() => { if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight; }, [messages, isTyping, isOpen]);

  async function sendMessage(value = input) {
    const question = value.trim();
    if (!question || question.length > 2000 || isTyping) return;
    const history = messages
      .filter((message) => message.id !== 0)
      .slice(-10)
      .map((message) => ({ role: message.sender === "user" ? "user" : "model", text: message.text }));
    setMessages((current) => [...current, { id: Date.now(), sender: "user", text: question }]);
    setInput("");
    setIsTyping(true);
    try {
      const result = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      if (!result.ok) throw new Error("Chat request failed");
      const data = await result.json();
      if (typeof data.response !== "string" || !data.response.trim()) throw new Error("Invalid chat response");
      setMessages((current) => [...current, { id: Date.now() + 1, sender: "bot", text: data.response }]);
    } catch {
      setMessages((current) => [...current, { id: Date.now() + 1, sender: "bot", text: connectionError }]);
    } finally {
      setIsTyping(false);
    }
  }

  return <div className="chatbot">
    <section className={"chatbot__panel" + (isOpen ? " chatbot__panel--open" : "")} aria-label="Praveen's AI Assistant" aria-hidden={!isOpen}>
      <header className="chatbot__header"><span className="chatbot__avatar"><FiCpu aria-hidden="true" /></span><span className="chatbot__heading"><strong>Praveen's AI Assistant</strong><small>Ask me about my portfolio</small></span><button className="chatbot__close" onClick={() => setIsOpen(false)} aria-label="Close chat" tabIndex={isOpen ? 0 : -1}><FiX /></button></header>
      <div className="chatbot__messages" ref={listRef} aria-live="polite">
        {messages.map((message) => <div key={message.id} className={"chatbot__message chatbot__message--" + message.sender}>{message.text}</div>)}
        {messages.length === 1 && <div className="chatbot__suggestions">{suggestions.map((question) => <button key={question} onClick={() => sendMessage(question)}>{question}</button>)}</div>}
        {isTyping && <div className="chatbot__typing" aria-label="Assistant is typing"><i /><i /><i /></div>}
      </div>
      <form className="chatbot__form" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
        <input value={input} maxLength={2000} onChange={(event) => setInput(event.target.value)} placeholder="Ask me anything..." aria-label="Your message" autoComplete="off" tabIndex={isOpen ? 0 : -1} />
        <button type="submit" aria-label="Send message" disabled={!input.trim() || isTyping} tabIndex={isOpen ? 0 : -1}><FiSend /></button>
      </form>
    </section>
    <button className={"chatbot__launcher" + (isOpen ? " chatbot__launcher--hidden" : "")} onClick={() => setIsOpen(true)} aria-label="Open chat assistant" aria-expanded={isOpen}><FiMessageCircle /></button>
  </div>;
}
export default Chatbot;
