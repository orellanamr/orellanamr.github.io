import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <span>Rolando</span>
      </div>

      <button className="hamburger-button" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          {t("home")}
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t("about")}
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          {t("projects")}
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t("contact")}
        </a>
      </nav>

      <div className="navbar-actions">
        <button className="language-toggle" onClick={toggleLanguage}>
          🌐 {i18n.language === "en" ? "EN" : "ES"}
        </button>
        <a href="/path/to/cv.pdf" download className="navbar-cv">
          {t("download_cv")}{" "}
          <span role="img" aria-label="icon">
            📄
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
s;
