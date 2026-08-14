import interviewMateImage from "../assets/image.png";
import multipleDiseaseImage from "../assets/image copy.png";

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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { icon: "code", value: "1+", label: "Projects Completed" },
  { icon: "briefcase", value: "0+", label: "Experience" },
  { icon: "cap", value: "8.6", label: "CGPA" },
  { icon: "trophy", value: "Problem Solver", label: "LeetCode" },
];

export const aboutPoints = [
  "Full Stack Development Enthusiast",
  "Strong problem solving skills",
  "Passionate about AI & ML",
  "Always learning new technologies",
];

export const aboutText =
  "I'm a Computer Science and Engineering student specializing in AI & ML. I enjoy building web applications and exploring new technologies to solve real-world problems.";

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
