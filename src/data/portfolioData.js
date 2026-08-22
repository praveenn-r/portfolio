import interviewMateImage from "../assets/image.webp";
import multipleDiseaseImage from "../assets/image copy.webp";

export const profile = {
  name: "Praveen R Tippimani",
  firstName: "Praveen",
  highlightName: "R Tippimani",
  tagline: "Aspiring Software Developer | AI & ML Enthusiast",
  intro:
    "I build intelligent, scalable and user-friendly web applications that solve real-world problems.",
  email: "praveen888rt@gmail.com",
  phone: "+91 7019164383",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-profile",
  resumeUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { icon: "code", value: "2+", label: "Projects Completed" },
  { icon: "briefcase", value: "0+", label: "Experience" },
  { icon: "cap", value: "8.6", label: "CGPA" },
];

export const aboutPoints = [
  { title: "Full Stack", subtitle: "Development Enthusiast", icon: "code" },
  { title: "Strong", subtitle: "Problem Solving Skills", icon: "puzzle" },
  { title: "Passionate", subtitle: "About AI & ML", icon: "brain" },
  { title: "Always Learning", subtitle: "New Technologies", icon: "rocket" },
];

export const aboutText =
  "I'm a Computer Science and Engineering student specializing in AI & ML. I enjoy building web applications and exploring new technologies to solve real-world problems.";

export const experience = {
  role: "Python Full Stack Trainee",
  company: "Dhee Coding Lab.",
  location: "Bangalore",
  period: "2026 - Present",
  timeline: [
    {
      icon: "cap",
      color: "purple",
      parts: [
        { text: "Currently upskilling in " },
        { text: "Python Full Stack", accent: true },
        { text: " Development." },
      ],
    },
    {
      icon: "code",
      color: "pink",
      parts: [
        { text: "Working on " },
        { text: "full-stack", accent: true },
        { text: " development projects to enhance my technical skills." },
      ],
    },
    {
      icon: "layout",
      color: "orange",
      parts: [
        { text: "Built simple web applications using " },
        { text: "Python", accent: true },
        { text: ", " },
        { text: "HTML", accent: true },
        { text: ", " },
        { text: "CSS", accent: true },
        { text: ", " },
        { text: "JavaScript", accent: true },
        { text: ", and " },
        { text: "SQL", accent: true },
        { text: "." },
      ],
    },
    {
      icon: "puzzle",
      color: "blue",
      parts: [
        { text: "Improved " },
        { text: "problem-solving", accent: true },
        { text: " and " },
        { text: "debugging", accent: true },
        { text: " skills by working on real-world coding tasks." },
      ],
    },
    {
      icon: "star",
      color: "purple",
      parts: [
        { text: "Skills learned: " },
        { text: "Python", accent: true },
        { text: ", " },
        { text: "HTML", accent: true },
        { text: ", " },
        { text: "CSS", accent: true },
        { text: ", " },
        { text: "JavaScript", accent: true },
        { text: ", " },
        { text: "SQL", accent: true },
        { text: "." },
      ],
    },
  ],
};

export const certifications = [
  {
    title: "Python Full Stack Development",
    provider: "Dhee Coding Lab",
    date: "June 2024",
    credentialId: "DCL/FS/2024/0897",
    accent: "#6c4cff",
    icon: "dhee",
  },
  {
    title: "MySQL",
    provider: "Coursera",
    date: "April 2024",
    credentialId: "8X9J-LK72-NH3B",
    accent: "#f02b8c",
    icon: "mysql",
  },
  {
    title: "Python Programming",
    provider: "Simplilearn",
    date: "March 2024",
    credentialId: "4521897",
    accent: "#ff9d00",
    icon: "python",
  },
  {
    title: "AWS Cloud Foundations",
    provider: "AWS Academy",
    date: "May 2024",
    credentialId: "AWSAC-12984",
    accent: "#3478ff",
    icon: "aws",
  },
];

export const techStack = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "MySQL", icon: "mysql" },
  { name: "VS Code", icon: "vscode" },
  { name: "GitHub", icon: "github" },
];

export const projects = [
  {
    title: "InterviewMate AI",
    stack: "Python, Django, MySQL, React",
    description:
      "AI-powered interview preparation platform that provides role-based questions, real-time AI feedback and performance dashboard.",
    liveUrl: "#",
    githubUrl: "#",
    theme: "dark",
    image: interviewMateImage,
  },
  {
    title: "Multiple Disease Prediction System",
    stack: "Python, Django, PostgreSQL, React",
    description:
      "ML-based system that predicts multiple diseases using symptoms with an intuitive and responsive user interface.",
    liveUrl: "#",
    githubUrl: "#",
    theme: "light",
    image: multipleDiseaseImage,
  },
];
