import { Fragment } from "react";
import { FiAward, FiCalendar, FiSend, FiCode } from "react-icons/fi";
import { FaPython, FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { certifications } from "../data/portfolioData";
import "./Certifications.css";

const icons = {
  dhee: <FiCode />,
  mysql: <SiMysql />,
  python: <FaPython />,
  aws: <FaAws />,
};

// Hexagon points for a 120x104 viewBox (flat-top hexagon)
const HEX_POINTS = "60,4 112,32 112,72 60,100 8,72 8,32";

function CertCard({ cert, index }) {
  return (
    <div
      className="cert-card"
      style={{ "--card-accent": cert.accent }}
    >
      <span className="cert-card__badge">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="cert-card__edge" aria-hidden="true" />

      <div className="cert-card__inner">
        <div className="cert-card__hex-wrap">
          <svg
            className="cert-card__hex-svg"
            viewBox="0 0 120 104"
            aria-hidden="true"
          >
            <polygon className="cert-card__hex-base" points={HEX_POINTS} />
            <polygon className="cert-card__hex-trace" points={HEX_POINTS} />
          </svg>
          <span className="cert-card__hex-icon">{icons[cert.icon]}</span>
        </div>

        <h3 className="cert-card__title">{cert.title}</h3>
        <span className="cert-card__provider">{cert.provider}</span>

        <span className="cert-card__divider" />

        <div className="cert-card__meta">
          <span>
            <FiCalendar /> {cert.date}
          </span>
          <span className="cert-card__meta-sep">|</span>
          <span>Credential ID: {cert.credentialId}</span>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <span className="certifications__deco certifications__deco--dots-top" aria-hidden="true" />
      <span className="certifications__deco certifications__deco--blob" aria-hidden="true" />
      <span className="certifications__deco certifications__deco--dots-bottom" aria-hidden="true" />

      <div className="container">
        <div className="certifications__head">
          <div className="certifications__head-left">
            <span className="certifications__badge-icon">
              <FiAward />
            </span>

            <div>
              <span className="certifications__eyebrow">
                <span className="certifications__eyebrow-line" />
                Certifications
              </span>

              <h2 className="certifications__title">
                My <span className="certifications__title-gradient">Certifications</span>
              </h2>

              <p className="certifications__subtitle">
                Continuously learning, growing, and building skills for a
                better tomorrow.
              </p>
            </div>
          </div>

          <span className="certifications__cursive">
            Every step counts! <FiSend />
          </span>
        </div>

        <div className="certifications__row">
          {certifications.map((cert, index) => (
            <Fragment key={cert.title}>
              <CertCard cert={cert} index={index} />
              {index < certifications.length - 1 && (
                <span
                  className="cert-connector"
                  style={{ "--connector-accent": cert.accent }}
                  aria-hidden="true"
                >
                  <span className="cert-connector__dot" />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
