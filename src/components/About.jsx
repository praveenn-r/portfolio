import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";
import { FaPuzzlePiece, FaRocket } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { aboutPoints, aboutText, profile } from "../data/portfolioData";
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
      <div className="container about__inner">
        <div className="about__content">
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
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.subtitle}</span>
                </div>
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

        <div className="about__visual">
          <span className="about__blob" aria-hidden="true" />

          <div className="about__card">
            <span className="about__card-deco about__card-deco--circle" aria-hidden="true" />
            <span className="about__card-deco about__card-deco--dots" aria-hidden="true" />

            <span className="about__avatar">
              <FiUser />
            </span>

            <h3 className="about__card-title">Let's Connect</h3>
            <span className="about__card-underline" />
            <p className="about__card-sub">Feel free to reach out!</p>

            <ul className="about__contact-list">
              <li>
                <span className="about__contact-icon">
                  <FiMail />
                </span>
                <div>
                  <strong>{profile.email}</strong>
                  <span className="about__contact-sub">Email Address</span>
                </div>
              </li>
              <li>
                <span className="about__contact-icon about__contact-icon--purple">
                  <FiPhone />
                </span>
                <div>
                  <strong>{profile.phone}</strong>
                  <span className="about__contact-sub">Phone Number</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;