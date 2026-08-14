import { FiSend } from "react-icons/fi";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <div>
          <h2 className="cta__title">
            Ready to build something
            <br />
            amazing together?
          </h2>
          <p className="cta__text">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </div>
        <a href="mailto:praveen888rt@gmail.com" className="btn btn-outline cta__btn">
          Let's Connect <FiSend />
        </a>
      </div>
    </section>
  );
}

export default CTA;
