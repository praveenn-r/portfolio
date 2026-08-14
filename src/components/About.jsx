import { FiCheck, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { aboutPoints, aboutText, profile } from "../data/portfolioData";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__inner">
        <div className="about__content">
          <h2 className="about__title">
            A little bit
            <br />
            <span className="accent">about me</span>
          </h2>
          <p className="about__text">{aboutText}</p>

          <ul className="about__points">
            {aboutPoints.map((point) => (
              <li key={point}>
                <span className="about__check">
                  <FiCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a href="#about" className="btn btn-outline about__more">
            More About Me →
          </a>
        </div>

        <div className="about__card">
          <ul className="about__contact-list">
            <li>
              <span className="about__contact-icon">
                <FiMail />
              </span>
              {profile.email}
            </li>
            <li>
              <span className="about__contact-icon">
                <FiPhone />
              </span>
              {profile.phone}
            </li>
            <li>
              <span className="about__contact-icon">
                <FiMapPin />
              </span>
              {profile.location}
            </li>
          </ul>

          <div className="about__illustration">
            <span>Illustration / photo goes here</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
