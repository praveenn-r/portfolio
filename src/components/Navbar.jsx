import { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (label) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Praveen <span className="accent">R T</span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${active === link.label ? "is-active" : ""}`}
              onClick={() => handleClick(link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a href={profile.resumeUrl} className="btn btn-primary navbar__cta">
            <FiDownload /> Download Resume
          </a>
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
