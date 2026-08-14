import { FiUser, FiCode, FiArrowRight } from "react-icons/fi";
import { FaPuzzlePiece, FaRocket } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { aboutPoints, aboutText } from "../data/portfolioData";
import "./About.css";

const pointIcons = {
  code: <FiCode />,
  puzzle: <FaPuzzlePiece />,
  brain: <GiBrain />,
  rocket: <FaRocket />,
};

function About() {
  return (
    <section className="about section" id="about">
      <span className="about__deco about__deco--blob-right" aria-hidden="true" />
      <span className="about__deco about__deco--blob-left" aria-hidden="true" />
      <span className="about__deco about__deco--dots-top" aria-hidden="true" />
      <span className="about__deco about__deco--dots-bottom" aria-hidden="true" />

      <div className="container about__inner">
        <span className="about__eyebrow">
          <span className="about__eyebrow-icon">
            <FiUser />
          </span>
          Get to know me
        </span>

        <h2 className="about__title">
          A little bit
          <br />
          <span className="about__title-gradient">about me</span>
        </h2>
        <span className="about__title-underline" />

        <p className="about__text">{aboutText}</p>

        <div className="about__points">
          {aboutPoints.map((point) => (
            <div className="about__point" key={point.title}>
              <span className="about__point-icon">
                {pointIcons[point.icon]}
              </span>
              <strong>{point.title}</strong>
              <span className="about__point-divider" />
              <span className="about__point-sub">{point.subtitle}</span>
            </div>
          ))}
        </div>

        <a href="#about" className="btn btn-primary about__more">
          <span className="about__more-icon">
            <FiUser />
          </span>
          More About Me <FiArrowRight />
        </a>
      </div>
    </section>
  );
}

export default About;
