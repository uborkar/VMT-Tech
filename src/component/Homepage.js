import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import i18n from "i18next";
import "../i18n";
import Headersec from "./Header";
import Footersec from "./Footer";

function HomePage() {
  const { t } = useTranslation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  // Define changeLanguage function here if needed
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
  document.body.classList.toggle('mobile-nav-active', isMobileNavActive);
}, [isMobileNavActive]);

  return (
    <div>
      <>
        <Helmet>
          <html lang={i18n.language} />
          <title>{t("page_title")}</title>
          <meta name="description" content={t("page_description")} />
        </Helmet>
        {/* ... */}
      </>
      <Headerf 
        isMobileNavActive={isMobileNavActive} 
        setIsMobileNavActive={setIsMobileNavActive}
        changeLanguage={changeLanguage}
        t={t}
      />
      <div className="main">

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Stats Section */}
        <StatsSection />

        {/* About Alt Section */}
        <AboutAltSection />

        {/* Clients Section */}
        {/*<ClientsSection />*/}

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
}

// Header Component (moved to separate file)
function Headerf({ isMobileNavActive, setIsMobileNavActive, changeLanguage, t }) {
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
            <li><a href="#hero" className="active">{t("home")}</a></li>
            <li><a href="#about">{t("about")}</a></li>
            <li><a href="#services">{t("services")}</a></li>
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
            className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? "bi-x" : "bi-list"}`}
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

// Footer Component (moved to separate file)

// Componentized sections
function HeroSection() {
  const { t } = useTranslation();
  const services = [
    {
      icon: "bi bi-lightning-charge-fill",
      title: t("hero.services.fast_processing.title"),
      description: t("hero.services.fast_processing.description"),
      delay: 100,
    },
    {
      icon: "bi bi-file-earmark-text-fill",
      title: t("hero.services.all_in_one.title"),
      description: t("hero.services.all_in_one.description"),
      delay: 200,
    },
    {
      icon: "bi bi-shield-lock-fill",
      title: t("hero.services.secure_process.title"),
      description: t("hero.services.secure_process.description"),
      delay: 300,
    },
    {
      icon: "bi bi-headset",
      title: t("hero.services.expert_guidance.title"),
      description: t("hero.services.expert_guidance.description"),
      delay: 400,
    },
  ];

  return (
    <section id="hero" className="hero section">
      <img
        src="assets/img/hero-bg-abstract.jpg"
        alt=""
        data-aos="fade-in"
        className=""
      />

      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-out">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
            <p>{t("hero.description")}</p>
          </div>
        </div>
        <div className="text-center" data-aos="zoom-out" data-aos-delay="100">
          <a href="#about" className="btn-get-started">
            {t("hero.get_started")}
          </a>
        </div>

        <div className="row gy-4 mt-5">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              className="col-md-6 col-lg-3"
              data-aos="zoom-out"
              data-aos-delay={service.delay}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="title">
                  <a href="/">{service.title}</a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("about_section.title")}</h2>
        <p className="fst-italic b-text color-primary">
          {t("about_section.subtitle")}
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>{t("about_section.description1")}</p>
            <ul>
              {t("about_section.bullet_points", { returnObjects: true }).map(
                (item, index) => (
                  <li key={`about-item-${index}`}>
                    <i className="bi bi-check2-circle"></i> <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>{t("about_section.description2")}</p>
            <a href="/" className="read-more">
              <span>{t("about_section.read_more")}</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    { value: 10000, label: t("stats.happy_clients"), suffix: "+" },
    { value: 98, label: t("stats.approval_rate"), suffix: "%" },
    {
      value: 24,
      label: t("stats.processing_time"),
      prefix: "<",
      suffix: "hrs",
    },
    { value: 32, label: t("stats.dedicated_workers") },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            startCountAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // ~60fps
    const totalFrames = Math.round(duration / frameDuration);

    stats.forEach((stat, index) => {
      let frame = 0;

      const counterInterval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(stat.value * progress);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (frame === totalFrames) {
          clearInterval(counterInterval);
        }
      }, frameDuration);
    });
  };

  return (
    <section
      id="stats"
      className="stats section light-background"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div key={`stat-${index}`} className="col-lg-3 col-md-6">
              <div
                className="stats-item text-center w-100 h-100"
                style={{
                  padding: "40px 20px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="stat-value"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "15px",
                    minHeight: "70px",
                  }}
                >
                  {stat.prefix && (
                    <span
                      className="prefix"
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#495057",
                        lineHeight: "1",
                        margin: "0 5px",
                      }}
                    >
                      {stat.prefix}
                    </span>
                  )}
                  <span
                    className="counter"
                    style={{
                      fontSize: "48px",
                      fontWeight: "800",
                      color: "var(--accent-color)",
                      display: "inline-block",
                      lineHeight: "1",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {counts[index].toLocaleString()}
                  </span>
                  {stat.suffix && (
                    <span
                      className="suffix"
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#495057",
                        lineHeight: "1",
                        margin: "0 5px",
                        alignSelf: "flex-start",
                        marginTop: "5px",
                      }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    color: "#6c757d",
                    padding: "0",
                    margin: "0",
                    fontFamily: "var(--heading-font)",
                    fontSize: "18px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {stat.label}
                  <span
                    style={{
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "3px",
                      background: "var(--accent-color)",
                      borderRadius: "2px",
                    }}
                  ></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function AboutAltSection() {
  const { t } = useTranslation();

  return (
    <section id="about-alt" className="about-alt section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox pulsating-play-btn"
            />
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>{t("about_alt.title")}</h3>
            <p className="fst-italic">{t("about_alt.subtitle")}</p>
            <ul>
              {t("about_alt.bullet_points", { returnObjects: true }).map(
                (item, index) => (
                  <li key={`about-alt-item-${index}`}>
                    <i className="bi bi-check2-all"></i> <span>{item}</span>
                  </li>
                )
              )}
            </ul>
            <p>{t("about_alt.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// function ClientsSection() {
//   const clients = Array(6)
//     .fill()
//     .map((_, i) => i + 1);

//   return (
//     <section id="clients" className="clients section light-background">
//       <div className="container" data-aos="fade-up">
//         <div className="row gy-4">
//           {clients.map((client) => (
//             <div
//               key={`client-${client}`}
//               className="col-xl-2 col-md-3 col-6 client-logo"
//             >
//               <img
//                 src={`assets/img/clients/client-${client}.png`}
//                 className="img-fluid"
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TestimonialsSection() {
  const { t } = useTranslation();

  // All 5 testimonials with translation keys
  const testimonials = [
    {
      quote: t(
        "testimonial1.quote",
        "💬 I got my Shop Act License in just 1 day with VMT-TECH! Earlier, I struggled for weeks."
      ),
      name: t("testimonial1.name", "Ramesh P."),
      role: t("testimonial1.role", "Business Owner"),
      image: "testimonials-1.jpg",
    },
    {
      quote: t(
        "testimonial2.quote",
        "The GST registration process was so smooth and fast. Highly recommended for all business owners."
      ),
      name: t("testimonial2.name", "Sara W."),
      role: t("testimonial2.role", "Designer"),
      image: "testimonials-2.jpg",
    },
    {
      quote: t(
        "testimonial3.quote",
        "The team at VMT-TECH guided me through every step of getting my FSSAI license. Their expertise saved me from multiple rejections."
      ),
      name: t("testimonial3.name", "Arjun D."),
      role: t("testimonial3.role", "Restaurant Owner"),
      image: "testimonials-3.jpg",
    },
    {
      quote: t(
        "testimonial4.quote",
        "I got my Udyam certificate within hours of applying through VMT-TECH. Their digital process is incredibly efficient!"
      ),
      name: t("testimonial4.name", "Neha G."),
      role: t("testimonial4.role", "Handicraft Business"),
      image: "testimonials-4.jpg",
    },
    {
      quote: t(
        "testimonial5.quote",
        "As a freelancer, I needed multiple licenses. VMT-TECH bundled everything together and saved me 60% compared to individual applications."
      ),
      name: t("testimonial5.name", "Rahul J."),
      role: t("testimonial5.role", "Freelance Consultant"),
      image: "testimonials-5.jpg",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("testimonials.title", "Testimonials")}</h2>
        <p>
          {t(
            "testimonials.subtitle",
            "What our clients say about our services"
          )}
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="init-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={`assets/img/testimonials/${testimonial.image}`}
                  className="testimonial-img"
                  alt={`${testimonial.name} - ${testimonial.role}`}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useTranslation();

  // Default icon classes for each service
  const defaultIcons = {
    "food-license": {
      icon: "fas fa-utensils",
      backIcon: "fas fa-file-alt",
    },
    "shop-act-license": {
      icon: "fas fa-store",
      backIcon: "fas fa-file-signature",
    },
    "udyam-certificate": {
      icon: "fas fa-certificate",
      backIcon: "fas fa-id-card",
    },
    "gst-registration": {
      icon: "fas fa-file-invoice-dollar",
      backIcon: "fas fa-receipt",
    },
    "itr-filing": {
      icon: "fas fa-file-alt",
      backIcon: "fas fa-file-invoice",
    },
    "pollution-certificate": {
      icon: "fas fa-industry",
      backIcon: "fas fa-leaf",
    },
  };

  // Get services with proper error handling
  let services;
  try {
    services = t("services_section.items", { returnObjects: true });
    // Ensure icons are always set
    services = services.map((service) => ({
      ...defaultIcons[service.id],
      ...service,
    }));
  } catch (error) {
    console.error("Error loading services:", error);
    services = Object.keys(defaultIcons).map((id) => ({
      id,
      title: "Service",
      price: "₹--- +GST",
      description: "Loading service details...",
      documents: ["Loading documents..."],
      ...defaultIcons[id],
    }));
  }

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("services_section.title", "Services")}</h2>
        <p>
          {t(
            "services_section.subtitle",
            "Comprehensive services for all your business documentation needs"
          )}
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="cards-container">
            {services.map((service) => (
              <div key={service.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="plan">
                      <div className="inner">
                        <div className="card-icon">
                          <i className={service.icon}></i>
                        </div>
                        <span className="pricing">
                          <span>{service.price}</span>
                        </span>
                        <p className="title">{service.title}</p>
                        <p className="info">
                          <strong>
                            {t(
                              "services_section.document_required",
                              "Document Required"
                            )}
                          </strong>
                        </p>
                        <ul className="features">
                          {service.documents.map((doc, index) => (
                            <li key={index}>
                              <span className="icon">
                                <i className="fas fa-check"></i>
                              </span>{" "}
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-icon back-icon">
                      <i className={service.backIcon}></i>
                    </div>
                    <h2 className="back-title">{service.title}</h2>
                    <p className="back-description">{service.description}</p>
                    <div className="back-buttons">
                      <Link to={`/book/${service.id}`} className="back-button">
                        <i className="fas fa-paper-plane"></i>{" "}
                        {t("services_section.book_now", "Book Now")}
                      </Link>
                      <Link
                        to={`/services/${service.id}`}
                        className="back-button"
                      >
                        {t("services_section.read_more", "Read More")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionSection() {
  const { t } = useTranslation();

  return (
    <section
      id="call-to-action"
      className="call-to-action section accent-background"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>{t("cta_section.title", "Call To Action")}</h3>
              <p>
                {t(
                  "cta_section.description",
                  "Stop struggling with paperwork! Let NetCafe handle approvals while you focus on your business."
                )}
              </p>
              <a className="cta-btn" href="/">
                {t("cta_section.button_text", "Call To Action")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  // Get FAQs with translation fallback
  const faqs = [
    {
      question: t(
        "faq.q1.question",
        "Can I get a Shop Act License without a commercial address?"
      ),
      answer: t("faq.q1.answer", "Only if turnover exceeds ₹20L/₹40L."),
    },
    {
      question: t("faq.q2.question", "Is GST required for freelancers?"),
      answer: t(
        "faq.q2.answer",
        "GST registration is mandatory for freelancers whose annual turnover exceeds ₹20 lakhs. However, if you provide services across state lines, you need to register for GST regardless of your turnover."
      ),
    },
    {
      question: t("faq.q3.question", "How long is the FSSAI license valid?"),
      answer: t(
        "faq.q3.answer",
        "FSSAI licenses are valid for 1–5 years (renewable). The duration depends on the type of license you obtain and your preference at the time of application."
      ),
    },
    {
      question: t(
        "faq.q4.question",
        "Do you offer bulk discounts for multiple services?"
      ),
      answer: t(
        "faq.q4.answer",
        "Yes! We offer a 10% discount when you purchase 3 or more services together (e.g., GST + Shop Act + ITR). Contact our sales team for larger enterprise packages."
      ),
    },
    {
      question: t(
        "faq.q5.question",
        "Can I register a company without a physical office?"
      ),
      answer: t(
        "faq.q5.answer",
        "Yes, you can register a company using a virtual office or registered address service. However, certain business types may require a physical commercial space."
      ),
    },
    {
      question: t(
        "faq.q6.question",
        "What is the processing time for trademark registration?"
      ),
      answer: t(
        "faq.q6.answer",
        "The trademark registration process typically takes 18-24 months in India. However, you can start using the ™ symbol immediately after filing your application."
      ),
    },
  ];

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("faq.title", "Frequently Asked Questions")}</h2>
        <p>
          {t(
            "faq.subtitle",
            "Get answers to common questions about our business registration services"
          )}
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  key={`faq-${index}`}
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>
                    <span className="num">0{index + 1}.</span> {faq.question}
                  </h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("contact_section.title", "Contact")}</h2>
        <p>
          {t(
            "contact_section.subtitle",
            "Have questions or need assistance? Get in touch with our team today – we're here to help!"
          )}
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: "0", width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>{t("contact_section.address_title", "Address")}</h3>
                <p>
                  {t(
                    "contact_section.address",
                    "A108 Adam Street, New York, NY 535022"
                  )}
                </p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>{t("contact_section.call_title", "Call Us")}</h3>
                <p>{t("contact_section.phone", "+1 5589 55488 55")}</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>{t("contact_section.email_title", "Email Us")}</h3>
                <p>{t("contact_section.email", "info@example.com")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={t("contact_section.form.name", "Your Name")}
                    required=""
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder={t("contact_section.form.email", "Your Email")}
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder={t("contact_section.form.subject", "Subject")}
                    required=""
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder={t("contact_section.form.message", "Message")}
                    required=""
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">
                    {t("contact_section.form.loading", "Loading")}
                  </div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    {t(
                      "contact_section.form.success",
                      "Your message has been sent. Thank you!"
                    )}
                  </div>

                  <button type="submit">
                    {t("contact_section.form.submit", "Send Message")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">
                {t("footer.company_name", "VMT-TECH")}
              </span>
            </a>
            <p>
              {t(
                "footer.description",
                "VMT Tech is a one-stop digital solution hub that helps individuals, entrepreneurs, and businesses with essential government registrations and compliance services. The platform simplifies complex legal and financial processes by making them accessible online at affordable costs."
              )}
            </p>
            <div className="social-links d-flex mt-4">
              <a href="/" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>{t("footer.useful_links", "Useful Links")}</h4>
            <ul>
              <li>
                <a href="/">{t("footer.home", "Home")}</a>
              </li>
              <li>
                <a href="/">{t("footer.about_us", "About us")}</a>
              </li>
              <li>
                <a href="/">{t("footer.services", "Services")}</a>
              </li>
              <li>
                <a href="/">{t("footer.terms", "Terms of service")}</a>
              </li>
              <li>
                <a href="/">{t("footer.privacy", "Privacy policy")}</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>{t("footer.our_services", "Our Services")}</h4>
            <ul>
              <li>
                <a href="/">{t("services_sec.food_license", "Food License")}</a>
              </li>
              <li>
                <a href="/">{t("services_sec.shop_act", "Shop Act License")}</a>
              </li>
              <li>
                <a href="/">{t("services_sec.udyam", "Udyam Certificate")}</a>
              </li>
              <li>
                <a href="/">{t("services_sec.gst", "GST Registration")}</a>
              </li>
              <li>
                <a href="/">{t("services_sec.itr", "ITR Filing")}</a>
              </li>
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

export default HomePage;

