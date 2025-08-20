import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">{t("footer.company_name", "VMT-TECH")}</span>
            </a>
            <p>
              {t("footer.description", "VMT Tech is a one-stop digital solution hub...")}
            </p>
            <div className="social-links d-flex mt-4">
              <a href="/" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="/" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="/" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>{t("footer.useful_links", "Useful Links")}</h4>
            <ul>
              <li><a href="/">{t("footer.home", "Home")}</a></li>
              <li><a href="/">{t("footer.about_us", "About us")}</a></li>
              <li><a href="/">{t("footer.services", "Services")}</a></li>
              <li><a href="/">{t("footer.terms", "Terms of service")}</a></li>
              <li><a href="/">{t("footer.privacy", "Privacy policy")}</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>{t("footer.our_services", "Our Services")}</h4>
            <ul>
              <li><a href="/">{t("services_sec.food_license", "Food License")}</a></li>
              <li><a href="/">{t("services_sec.shop_act", "Shop Act License")}</a></li>
              <li><a href="/">{t("services_sec.udyam", "Udyam Certificate")}</a></li>
              <li><a href="/">{t("services_sec.gst", "GST Registration")}</a></li>
              <li><a href="/">{t("services_sec.itr", "ITR Filing")}</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>{t("footer.contact_us", "Contact Us")}</h4>
            <p>{t("footer.address_line1", "A108 Adam Street")}</p>
            <p>{t("footer.address_line2", "New York, NY 535022")}</p>
            <p>{t("footer.address_line3", "United States")}</p>
            <p className="mt-4">
              <strong>{t("footer.phone", "Phone:")}</strong>{" "}
              <span>{t("footer.phone_number", "+1 5589 55488 55")}</span>
            </p>
            <p>
              <strong>{t("footer.email", "Email:")}</strong>{" "}
              <span>{t("footer.email_address", "info@example.com")}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>{t("footer.copyright", "Copyright")}</span>{" "}
          <strong className="px-1 sitename">
            {t("footer.company_name", "VMT-Tech")}
          </strong>{" "}
          <span>{t("footer.rights_reserved", "All Rights Reserved")}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;