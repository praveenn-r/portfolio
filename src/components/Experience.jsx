import { FiMapPin, FiCalendar, FiUser, FiCode, FiLayout, FiStar } from "react-icons/fi";
import { FaPuzzlePiece, FaPython } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { experience } from "../data/portfolioData";
import "./Experience.css";

const icons = {
  cap: <PiGraduationCapBold />,
  code: <FiCode />,
  layout: <FiLayout />,
  puzzle: <FaPuzzlePiece />,
  star: <FiStar />,
};

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__panel">
          <span className="experience__deco experience__deco--dots" aria-hidden="true" />

          <div className="experience__grid">
            <div className="experience__left">
              <span className="experience__cursive">Experience</span>

              <h2 className="experience__title">
                Experience
                <br />
                <span className="experience__title-gradient">
                  {experience.company}
                </span>
              </h2>

              <span className="experience__role">
                <span className="experience__role-icon">
                  <FiUser />
                </span>
                {experience.role}
              </span>

              <div className="experience__meta">
                <span>
                  <FiMapPin /> {experience.location}
                </span>
                <span className="experience__meta-divider" />
                <span>
                  <FiCalendar /> {experience.period}
                </span>
              </div>

              <div className="experience__visual">
                <span className="experience__blob" aria-hidden="true" />
                <div className="experience__laptop">
                  <div className="experience__laptop-screen">
                    <span className="line line--1" />
                    <span className="line line--2" />
                    <span className="line line--3" />
                    <span className="line line--4" />
                    <span className="line line--5" />
                  </div>
                  <div className="experience__laptop-base" />
                </div>

                <span className="experience__chip experience__chip--python">
                  <FaPython />
                </span>
                <span className="experience__chip experience__chip--code">
                  {"</>"}
                </span>
                <span className="experience__chip experience__chip--sql">SQL</span>

                <div className="experience__plant" aria-hidden="true">
                  <span className="experience__plant-leaf leaf--1" />
                  <span className="experience__plant-leaf leaf--2" />
                  <span className="experience__plant-leaf leaf--3" />
                  <span className="experience__plant-pot" />
                </div>
              </div>
            </div>

            <div className="experience__right">
              <span className="experience__timeline-line" aria-hidden="true" />

              {experience.timeline.map((item, index) => (
                <div className="experience__item" key={index}>
                  <span
                    className={`experience__node experience__node--${item.color}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`experience__icon experience__icon--${item.color}`}
                  >
                    {icons[item.icon]}
                  </span>
                  <p className="experience__text">
                    {item.parts.map((part, i) =>
                      part.accent ? (
                        <strong
                          key={i}
                          className={`experience__accent experience__accent--${item.color}`}
                        >
                          {part.text}
                        </strong>
                      ) : (
                        <span key={i}>{part.text}</span>
                      )
                    )}
                  </p>
                  <span
                    className={`experience__badge experience__badge--${item.color}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;