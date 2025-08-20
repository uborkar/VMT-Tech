import React from "react";
import i18n from "i18next";

const LanguageSwitcher = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#!"
        id="languageDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        🌐 Language
      </a>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("mr")}
          >
            मराठी
          </button>
        </li>
      </ul>
    </li>
  );
};

export default LanguageSwitcher;
