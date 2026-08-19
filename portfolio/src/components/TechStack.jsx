import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { Fragment } from "react";
import { SiMysql, SiVsco } from "react-icons/si";
import { techStack } from "../data/portfolioData";
import TechItem from "./TechItem";
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
      <span className="tech__deco tech__deco--dots-top" aria-hidden="true" />
      <span className="tech__deco tech__deco--blob" aria-hidden="true" />
      <span className="tech__deco tech__deco--dots-bottom" aria-hidden="true" />

      <div className="container">
        <div className="tech__header">
          <span className="tech__header-line" />
          <h2 className="tech__title">
            Tech I <span className="accent">Work With</span>
          </h2>
          <span className="tech__header-line" />
        </div>

        <div className="tech__badge">
          <span className="tech__badge-spark">✦</span>
          A glimpse of the tools and technologies I use
          <span className="tech__badge-spark">✦</span>
        </div>

        <div className="tech__row">
          {techStack.map((tool, index) => (
            <Fragment key={tool.name}>
              <TechItem icon={icons[tool.icon]} name={tool.name} />
              {index < techStack.length - 1 && (
                <span className="tech-connector" aria-hidden="true">
                  <span className="tech-connector__dot" />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
