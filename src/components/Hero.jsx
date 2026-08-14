import { FiArrowRight, FiSend } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/portfolioData";
import profilePhoto from "../assets/profile-photo.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__pill">{profile.tagline}</span>

          <h1 className="hero__title">
            Hi, I'm
            <br />
            {profile.firstName} <span className="accent">{profile.highlightName}</span>
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect <FiSend />
            </a>
          </div>

          <div className="hero__connect">
            <span className="hero__connect-label">Connect with me</span>
            <div className="hero__socials">
              <a href={profile.linkedin} className="hero__social">
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href={profile.github} className="hero__social">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <span className="hero__deco hero__deco--circle" aria-hidden="true" />
            <span className="hero__deco hero__deco--dots" aria-hidden="true" />
            <img
              src={profilePhoto}
              alt={profile.name}
              className="hero__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;