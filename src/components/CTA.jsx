import { FiUser, FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./CTA.css";

// Update these paths to match wherever you keep your /assets folder
import rocket1 from "../assets/rocket1.png";
import rocket2 from "../assets/rocket2.png";
import rocket3 from "../assets/rocket3.png";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";
import line1 from "../assets/line1.png";
import dot from "../assets/dot.png";

function Contact() {
  return (
    <section className="connect" id="contact">
      <div className="container connect__inner">
        {/* faint dot grid, top right */}
        <img src={dot} alt="" className="connect__dots" aria-hidden="true" />

        {/* ---------- LEFT SIDE ---------- */}
        <div className="connect__left">
          <div className="connect__badge">
            <span className="connect__badge-icon">
              <FiUser />
            </span>
            <span className="connect__badge-label">Let's Connect</span>
          </div>

          <h2 className="connect__title">
            Let's Build <span className="connect__spark">✦</span>
            <br />
            <span className="connect__gradient">Something</span>
            <br />
            <span className="connect__gradient connect__gradient--underline">
              Amazing!
            </span>
            <img src={rocket2} alt="" className="connect__rocket-top" aria-hidden="true" />
            <img src={line1} alt="" className="connect__line1" aria-hidden="true" />
          </h2>

          <p className="connect__text">
            I'm always open to discussing new{" "}
            <span className="c-blue">projects</span>, creative{" "}
            <span className="c-purple">ideas</span> or{" "}
            <span className="c-pink">opportunities</span> to be part of your
            visions.
          </p>

          <div className="connect__illustration">
            <img
              src={arrow2}
              alt=""
              className="connect__arrow2"
              aria-hidden="true"
            />
            <img
              src={rocket1}
              alt=""
              className="connect__rocket-bottom"
              aria-hidden="true"
            />
          </div>

        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="connect__right">
          <span className="connect__reach-note">
            Feel free to
            <br />
            reach out!
            <img src={arrow} alt="" className="connect__reach-arrow" aria-hidden="true" />
          </span>

          <div className="connect__cards-shell">
            <div className="connect__cards">
              <span className="connect__track" aria-hidden="true">
                <span className="connect__track-dot connect__track-dot--orange" />
                <span className="connect__track-dot connect__track-dot--purple" />
                <span className="connect__track-dot connect__track-dot--blue" />
              </span>

              <a
                href="mailto:praveen888rt@gmail.com"
                className="connect__card connect__card--orange"
              >
                <span className="connect__icon connect__icon--orange">
                  <FiMail />
                </span>
                <span className="connect__card-text">
                  <strong>praveen888rt@gmail.com</strong>
                  <small>Email Address</small>
                </span>
                <span className="connect__action connect__action--pink">
                  <FiMail />
                </span>
              </a>

              <a href="tel:+917019164383" className="connect__card connect__card--purple">
                <span className="connect__icon connect__icon--purple">
                  <FiPhoneCall />
                </span>
                <span className="connect__card-text">
                  <strong>+91 7019164383</strong>
                  <small>Phone Number</small>
                </span>
                <span className="connect__action connect__action--blue">
                  <FaWhatsapp />
                </span>
              </a>

              <div className="connect__card connect__card--static connect__card--blue">
                <span className="connect__icon connect__icon--blue">
                  <FiMapPin />
                </span>
                <span className="connect__card-text">
                  <strong>Bengaluru, Karnataka, India</strong>
                  <small>Location</small>
                </span>
                <span className="connect__action connect__action--green">
                  <FiMapPin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM BAR ---------- */}
      <div className="container">
        <div className="connect__bottom">
          <div className="connect__bottom-left">
            <span className="connect__bottom-icon">
              <img src={rocket3} alt="" aria-hidden="true" />
            </span>
            <div className="connect__bottom-copy">
              <p>Let's turn ideas into reality.</p>
              <span className="connect__handwritten">
                I'd love to hear from you!
              </span>
            </div>
          </div>

          <span className="connect__divider" aria-hidden="true" />

          <div className="connect__bottom-right">
            <span>Let's Connect on</span>
            <div className="connect__socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="connect__social connect__social--linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="connect__social connect__social--github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="connect__social connect__social--twitter"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="connect__social connect__social--instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
