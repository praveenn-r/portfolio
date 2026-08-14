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
              <div>
                <strong>{profile.email}</strong>
                <span className="about__contact-sub">Email</span>
              </div>
            </li>
            <li>
              <span className="about__contact-icon">
                <FiPhone />
              </span>
              <div>
                <strong>{profile.phone}</strong>
                <span className="about__contact-sub">Phone</span>
              </div>
            </li>
            <li>
              <span className="about__contact-icon">
                <FiMapPin />
              </span>
              <div>
                <strong>{profile.location}</strong>
                <span className="about__contact-sub">Location</span>
              </div>
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