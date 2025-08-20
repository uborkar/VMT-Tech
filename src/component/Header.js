import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Header() {
  const { t } = useTranslation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-active', isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img
            src="/assets/img/logowithbg.jpeg"
            alt="VMT-TECH Logo"
            className="h-50 w-auto object-contain"
          />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#header" className="active">{t("home")}</a></li>
            <li><a href="#about">{t("about")}</a></li>
            <li><a href="/Service">{t("services")}</a></li>
            <li><a href="#contact">{t("contact")}</a></li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t("select_language")}
              </a>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                  <button className={`dropdown-item ${i18n.language === "en" ? "active" : ""}`} onClick={() => changeLanguage("en")}>
                    🇬🇧 English
                  </button>
                </li>
                <li>
                  <button className={`dropdown-item ${i18n.language === "mr" ? "active" : ""}`} onClick={() => changeLanguage("mr")}>
                    🇮🇳 मराठी
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavActive ? "bi-x" : "bi-list"
            }`}
            role="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          ></i>
        </nav>

        <a className="btn-getstarted" href="#about">
          Login
        </a>
      </div>
    </header>
  );
}

export default Header;