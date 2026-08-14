import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiMysql, SiVsco } from "react-icons/si";
import { techStack } from "../data/portfolioData";
import "./TechStack.css";

const icons = {
  html5: <FaHtml5 color="#E44D26" />,
  css3: <FaCss3Alt color="#2965F1" />,
  javascript: <FaJs color="#F0DB4F" />,
  python: <FaPython color="#3776AB" />,
  bootstrap: <FaBootstrap color="#7C3AED" />,
  mysql: <SiMysql color="#00758F" />,
  vscode: <SiVsco color="#007ACC" />,
  github: <FaGithub color="#181717" />,
};

function TechStack() {
  return (
    <section className="tech section-tight" id="skills">
      <div className="container">
        <h2 className="tech__title">
          Tech I <span className="accent">Work With</span>
        </h2>

        <div className="tech__grid">
          {techStack.map((tool) => (
            <div className="tech__item" key={tool.name}>
              <span className="tech__icon">{icons[tool.icon]}</span>
              <span className="tech__name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
