import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__head">
          <h2 className="projects__title">
            Featured <span className="accent">Projects</span>
          </h2>
          <a href="#projects" className="projects__viewall">
            View All Projects <FiArrowRight />
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-card__preview project-card__preview--${project.theme}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                  />
                ) : (
                  <span>{project.title}</span>
                )}
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__stack">{project.stack}</p>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__links">
                  <a href={project.liveUrl} className="project-card__demo">
                    Live Demo <FiArrowRight />
                  </a>
                  <a href={project.githubUrl} aria-label="GitHub repository">
                    <FaGithub />
                  </a>
                  <a href={project.liveUrl} aria-label="Open project">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
