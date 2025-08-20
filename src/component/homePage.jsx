import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'bootstrap-icons/font/bootstrap-icons.css';


const OnePage = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
 

  useEffect(() => {
    // This would be where you'd initialize any third-party libraries
    // like AOS, PureCounter, GLightbox, Swiper, Isotope in a real implementation
    // For this example, we'll just simulate the behavior with React state
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Styles
  const styles = {
    // Global styles
    body: {
      fontFamily: '"Open Sans", sans-serif',
      color: '#444444',
    },
    a: {
      color: '#4154f1',
      textDecoration: 'none',
    },
    'a:hover': {
      color: '#717ff5',
      textDecoration: 'none',
    },
    // Header styles
    header: {
      background: '#fff',
      boxShadow: '0px 2px 20px rgba(1, 41, 112, 0.1)',
      padding: '20px 0',
      position: 'sticky',
      top: 0,
      zIndex: 999,
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '30px',
      fontWeight: '700',
      color: '#012970',
      textDecoration: 'none',
    },
    navMenu: {
      display: 'flex',
      alignItems: 'center',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
      padding: '10px 15px',
    },
    navLink: {
      color: '#013289',
      fontWeight: '600',
      padding: '10px 0',
      textDecoration: 'none',
      transition: '0.3s',
    },
    navLinkHover: {
      color: '#4154f1',
    },
    activeNavLink: {
      color: '#4154f1',
    },
    dropdownToggle: {
      display: 'flex',
      alignItems: 'center',
    },
    dropdownIcon: {
      marginLeft: '5px',
      transition: '0.3s',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      background: '#fff',
      boxShadow: '0px 0px 30px rgba(127, 137, 161, 0.25)',
      padding: '10px 0',
      minWidth: '200px',
      display: 'none',
      zIndex: 99,
    },
    dropdownItem: {
      padding: '10px 20px',
    },
    dropdownLink: {
      color: '#012970',
      padding: '10px 0',
      display: 'block',
      textDecoration: 'none',
    },
    getStartedBtn: {
      background: '#4154f1',
      color: '#fff',
      borderRadius: '4px',
      padding: '8px 20px',
      marginLeft: '30px',
      textDecoration: 'none',
      fontWeight: '600',
    },
    mobileNavToggle: {
      display: 'none',
      fontSize: '24px',
      cursor: 'pointer',
    },
    // Hero section
    hero: {
      width: '100%',
      height: '100vh',
      background: 'url(assets/img/hero-bg-abstract.jpg) top center no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      padding: '120px 0 60px 0',
    },
    heroContainer: {
      position: 'relative',
      zIndex: 2,
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#012970',
      marginBottom: '20px',
    },
    heroDescription: {
      fontSize: '24px',
      color: '#444444',
      marginBottom: '30px',
    },
    heroBtn: {
      background: '#4154f1',
      color: '#fff',
      padding: '10px 35px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: '600',
    },
    iconBox: {
      background: '#fff',
      padding: '30px',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      height: '100%',
    },
    iconBoxIcon: {
      fontSize: '36px',
      color: '#4154f1',
      marginBottom: '20px',
    },
    iconBoxTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '15px',
    },
    iconBoxTitleLink: {
      color: '#012970',
      textDecoration: 'none',
    },
    // Section styles
    section: {
      padding: '60px 0',
    },
    sectionTitle: {
      textAlign: 'center',
      paddingBottom: '30px',
    },
    sectionTitleH2: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#012970',
    },
    sectionTitleP: {
      fontSize: '18px',
      color: '#848484',
    },
    // About section
    aboutContent: {
      padding: '30px',
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
    },
    aboutList: {
      listStyle: 'none',
      padding: 0,
    },
    aboutListItem: {
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
    },
    aboutListIcon: {
      color: '#4154f1',
      fontSize: '20px',
      marginRight: '10px',
    },
    readMore: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#4154f1',
      fontWeight: '600',
      textDecoration: 'none',
    },
    readMoreIcon: {
      marginLeft: '5px',
    },
    // Stats section
    stats: {
      background: '#f6f9ff',
    },
    statsItem: {
      padding: '30px',
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
    },
    statsCount: {
      fontSize: '42px',
      fontWeight: '700',
      color: '#012970',
    },
    statsText: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#4154f1',
    },
    // Clients section
    clients: {
      background: '#f6f9ff',
    },
    clientLogo: {
      padding: '20px',
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Testimonials
    testimonialItem: {
      background: '#fff',
      padding: '30px',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
    },
    testimonialImg: {
      width: '90px',
      borderRadius: '50%',
      margin: '0 auto 15px auto',
    },
    testimonialName: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0 5px 0',
    },
    testimonialPosition: {
      fontSize: '14px',
      color: '#6c757d',
    },
    // Services
    serviceItem: {
      padding: '40px',
      borderRadius: '10px',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      transition: '0.3s',
    },
    serviceItemCyan: {
      background: 'linear-gradient(180deg, #f3f7fa 0%, #e7f1f8 100%)',
      borderLeft: '4px solid #5fcf80',
    },
    serviceItemOrange: {
      background: 'linear-gradient(180deg, #fdf8f4 0%, #f8f1eb 100%)',
      borderLeft: '4px solid #ffbb2c',
    },
    serviceItemTeal: {
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e6f4ff 100%)',
      borderLeft: '4px solid #2db6fa',
    },
    serviceItemRed: {
      background: 'linear-gradient(180deg, #fef7f7 0%, #f9eaea 100%)',
      borderLeft: '4px solid #ff5828',
    },
    serviceItemIndigo: {
      background: 'linear-gradient(180deg, #f6f7ff 0%, #e9ecff 100%)',
      borderLeft: '4px solid #5846f9',
    },
    serviceItemPink: {
      background: 'linear-gradient(180deg, #fff5f7 0%, #ffeef2 100%)',
      borderLeft: '4px solid #e83e8c',
    },
    serviceIcon: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '15px',
    },
    // Call to action
    cta: {
      background: '#4154f1',
      padding: '80px 0',
    },
    ctaBtn: {
      background: '#fff',
      color: '#4154f1',
      padding: '10px 35px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: '600',
    },
    // Team
    teamMember: {
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      padding: '30px',
      height: '100%',
    },
    memberImg: {
      borderRadius: '50%',
      overflow: 'hidden',
      width: '150px',
      height: '150px',
      margin: '0 auto 20px auto',
    },
    memberSocial: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: '0.3s',
      display: 'flex',
    },
    memberSocialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: '#fff',
      color: '#012970',
      borderRadius: '50%',
      margin: '0 5px',
      transition: '0.3s',
    },
    memberInfo: {
      textAlign: 'center',
    },
    memberName: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '5px',
    },
    memberPosition: {
      fontSize: '14px',
      color: '#6c757d',
    },
    // Pricing
    pricingItem: {
      padding: '60px 40px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      height: '100%',
    },
    pricingFeatured: {
      borderTop: '4px solid #4154f1',
      position: 'relative',
      zIndex: 1,
    },
    pricingTitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '15px',
    },
    pricingPrice: {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    pricingPriceSpan: {
      fontSize: '16px',
      fontWeight: '400',
    },
    pricingList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '30px',
    },
    pricingListItem: {
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
    },
    pricingListIcon: {
      color: '#5fcf80',
      fontSize: '20px',
      marginRight: '10px',
    },
    pricingListIconNa: {
      color: '#ccc',
    },
    buyBtn: {
      display: 'inline-block',
      padding: '10px 35px',
      background: '#4154f1',
      color: '#fff',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: '600',
    },
    // FAQ
    faqContainer: {
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
    },
    faqItem: {
      padding: '20px',
      borderBottom: '1px solid #eee',
    },
    faqActive: {
      borderBottom: 'none',
    },
    faqToggle: {
      position: 'absolute',
      right: '20px',
      top: '20px',
      fontSize: '20px',
      transition: '0.3s',
    },
    faqContent: {
      display: 'none',
      paddingTop: '10px',
    },
    faqContentActive: {
      display: 'block',
    },
    // Contact
    contactInfoItem: {
      background: '#fff',
      padding: '30px',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
      marginBottom: '20px',
      display: 'flex',
    },
    contactInfoIcon: {
      fontSize: '24px',
      color: '#4154f1',
      marginRight: '20px',
    },
    contactForm: {
      background: '#fff',
      padding: '30px',
      borderRadius: '4px',
      boxShadow: '0px 0 30px rgba(1, 41, 112, 0.08)',
    },
    formControl: {
      width: '100%',
      padding: '10px 15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '20px',
    },
    formTextarea: {
      height: '150px',
    },
    // Footer
    footer: {
      background: '#f6f9ff',
      padding: '60px 0',
    },
    footerAbout: {
      paddingRight: '30px',
    },
    footerLinks: {
      padding: '0 15px',
    },
    footerLinksTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#012970',
    },
    footerLinksList: {
      listStyle: 'none',
      padding: 0,
    },
    footerLinksItem: {
      padding: '10px 0',
    },
    footerLinksLink: {
      color: '#444444',
      textDecoration: 'none',
    },
    footerContact: {
      padding: '0 15px',
    },
    socialLinks: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: '#fff',
      color: '#012970',
      borderRadius: '50%',
      marginRight: '10px',
      transition: '0.3s',
    },
    copyright: {
      padding: '20px 0',
      borderTop: '1px solid #ddd',
    },
    // Scroll top
    scrollTop: {
      position: 'fixed',
      right: '30px',
      bottom: '30px',
      width: '40px',
      height: '40px',
      background: '#4154f1',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99,
      opacity: 0,
      visibility: 'hidden',
      transition: '0.3s',
    },
    scrollTopActive: {
      opacity: 1,
      visibility: 'visible',
    },
    // Responsive styles
    '@media (max-width: 1199px)': {
      navMenu: {
        display: 'none',
      },
      mobileNavToggle: {
        display: 'block',
      },
    },
  };

 
  // FAQ data
  const faqItems = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
      answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
      answer: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
    },
    {
      question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
      answer: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
    },
    {
      question: 'Perspiciatis quod quo quos nulla quo illum ullam?',
      answer: 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.'
    }
  ];

  // Team members data
  const teamMembers = [
    { id: 1, name: 'Walter White', position: 'Chief Executive Officer', img: 'assets/img/team/team-1.jpg' },
    { id: 2, name: 'Sarah Jhonson', position: 'Product Manager', img: 'assets/img/team/team-2.jpg' },
    { id: 3, name: 'William Anderson', position: 'CTO', img: 'assets/img/team/team-3.jpg' },
    { id: 4, name: 'Amanda Jepson', position: 'Accountant', img: 'assets/img/team/team-4.jpg' },
  ];

  // Pricing plans data

  // Services data
  const services = [
    { id: 1, title: 'Nesciunt Mete', icon: 'bi-activity', color: 'cyan', description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.' },
    { id: 2, title: 'Eosle Commodi', icon: 'bi-broadcast', color: 'orange', description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.' },
    { id: 3, title: 'Ledo Markt', icon: 'bi-easel', color: 'teal', description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.' },
    { id: 4, title: 'Asperiores Commodit', icon: 'bi-bounding-box-circles', color: 'red', description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.' },
    { id: 5, title: 'Velit Doloremque', icon: 'bi-calendar4-week', color: 'indigo', description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.' },
    { id: 6, title: 'Dolori Architecto', icon: 'bi-chat-square-text', color: 'pink', description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.' },
  ];

  return (
    
    <div style={styles.body}>
      {/* Header */}
      <header id="header" style={styles.header}>
        <div className="container-fluid container-xl" style={styles.headerContainer}>
          <a href="index.html" className="logo" style={styles.logo}>
            <h1 className="sitename">OnePage</h1>
          </a>

          <nav id="navmenu" style={{ ...styles.navMenu, display: isMobileNavOpen ? 'flex' : 'none' }}>
            <ul style={styles.navList}>
              <li style={styles.navItem}><a href="#hero" style={{ ...styles.navLink, ...styles.activeNavLink }}>Home</a></li>
              <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
              <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
              <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileNav} style={styles.mobileNavToggle}></i>
          </nav>

          <a className="btn-getstarted" href="#about" style={styles.getStartedBtn}>Get Started</a>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section" style={styles.hero}>
          <div className="container" style={styles.heroContainer}>
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h1 style={styles.heroTitle}>Digitsl Solution Hub</h1>
                <p style={styles.heroDescription}>Your One stop destination for all documents Services</p>
              </div>
            </div>
            <div className="text-center">
              <a href="#about" className="btn-get-started" style={styles.heroBtn}>Login</a>
            </div>

            <div className="row gy-4 mt-5">
              {services.slice(0, 4).map((service) => (
                <div className="col-md-6 col-lg-3" key={service.id}>
                  <div className="icon-box" style={styles.iconBox}>
                    <div className="icon" style={styles.iconBoxIcon}><i className={`bi ${service.icon}`}></i></div>
                    <h4 className="title" style={styles.iconBoxTitle}><a href="" style={styles.iconBoxTitleLink}>{service.title}</a></h4>
                    <p className="description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section" style={styles.section}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>About Us</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 content" style={styles.aboutContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul style={styles.aboutList}>
                  <li style={styles.aboutListItem}><i className="bi bi-check2-circle" style={styles.aboutListIcon}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                  <li style={styles.aboutListItem}><i className="bi bi-check2-circle" style={styles.aboutListIcon}></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                  <li style={styles.aboutListItem}><i className="bi bi-check2-circle" style={styles.aboutListIcon}></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
                </ul>
              </div>

              <div className="col-lg-6">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <a href="#" style={styles.readMore}><span>Read More</span><i className="bi bi-arrow-right" style={styles.readMoreIcon}></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="stats section light-background" style={{ ...styles.section, ...styles.stats }}>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100" style={styles.statsItem}>
                  <span className="purecounter">232</span>
                  <p style={styles.statsText}>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100" style={styles.statsItem}>
                  <span className="purecounter">521</span>
                  <p style={styles.statsText}>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100" style={styles.statsItem}>
                  <span className="purecounter">1453</span>
                  <p style={styles.statsText}>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100" style={styles.statsItem}>
                  <span className="purecounter">32</span>
                  <p style={styles.statsText}>Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Alt Section */}


        {/* Clients Section */}
        <section id="clients" className="clients section light-background" style={{ ...styles.section, ...styles.clients }}>
          <div className="container">
            <div className="row gy-4">
              {[1, 2, 3, 4, 5, 6].map((client) => (
                <div className="col-xl-2 col-md-3 col-6 client-logo" key={client}>
                  <img src={`assets/img/clients/client-${client}.png`} className="img-fluid" alt="" style={styles.clientLogo} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section" style={styles.section}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>Testimonials</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5].map((testimonial) => (
                  <div className="swiper-slide" key={testimonial}>
                    <div className="testimonial-item" style={styles.testimonialItem}>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <img src={`assets/img/testimonials/testimonials-${testimonial}.jpg`} className="testimonial-img" alt="" style={styles.testimonialImg} />
                      <h3 style={styles.testimonialName}>Testimonial {testimonial}</h3>
                      <h4 style={styles.testimonialPosition}>Position</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {/* <section id="services" className="services section light-background" style={{ ...styles.section, ...styles.clients }}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>Services</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {services.map((service) => (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className="service-item" style={{ ...styles.serviceItem, ...styles[`serviceItem${service.color.charAt(0).toUpperCase() + service.color.slice(1)}`] }}>
                    <div className="icon" style={styles.serviceIcon}><i className={`bi ${service.icon}`}></i></div>
                    <a href="service-details.html" className="stretched-link">
                      <h3 style={styles.serviceTitle}>{service.title}</h3>
                    </a>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section accent-background" style={{ ...styles.section, ...styles.cta }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Call To Action</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <a className="cta-btn" href="#" style={styles.ctaBtn}>Call To Action</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team section light-background" style={{ ...styles.section, ...styles.clients }}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>Team</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {teamMembers.map((member) => (
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={member.id}>
                  <div className="team-member" style={styles.teamMember}>
                    <div className="member-img" style={styles.memberImg}>
                      <img src={member.img} className="img-fluid" alt="" />
                      <div className="social" style={styles.memberSocial}>
                        <a href="" style={styles.memberSocialLink}><i className="bi bi-twitter-x"></i></a>
                        <a href="" style={styles.memberSocialLink}><i className="bi bi-facebook"></i></a>
                        <a href="" style={styles.memberSocialLink}><i className="bi bi-instagram"></i></a>
                        <a href="" style={styles.memberSocialLink}><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info" style={styles.memberInfo}>
                      <h4 style={styles.memberName}>{member.name}</h4>
                      <span style={styles.memberPosition}>{member.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* Faq Section */}
        <section id="faq" className="faq section light-background" style={{ ...styles.section, ...styles.clients }}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>Frequently Asked Questions</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="faq-container" style={styles.faqContainer}>
                  {faqItems.map((item, index) => (
                    <div 
                      className={`faq-item ${activeFaq === index ? 'faq-active' : ''}`} 
                      key={index} 
                      style={{ ...styles.faqItem, ...(activeFaq === index ? styles.faqActive : {}) }}
                      onClick={() => toggleFaq(index)}
                    >
                      <h3>{item.question}</h3>
                      <div 
                        className="faq-content" 
                        style={{ ...styles.faqContent, ...(activeFaq === index ? styles.faqContentActive : {}) }}
                      >
                        <p>{item.answer}</p>
                      </div>
                      <i className={`faq-toggle bi bi-chevron-${activeFaq === index ? 'up' : 'down'}`} style={styles.faqToggle}></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section" style={styles.section}>
          <div className="container section-title" style={styles.sectionTitle}>
            <h2 style={styles.sectionTitleH2}>Contact</h2>
            <p style={styles.sectionTitleP}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">

            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item d-flex" style={styles.contactInfoItem}>
                  <i className="bi bi-geo-alt flex-shrink-0" style={styles.contactInfoIcon}></i>
                  <div>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div className="info-item d-flex" style={styles.contactInfoItem}>
                  <i className="bi bi-telephone flex-shrink-0" style={styles.contactInfoIcon}></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div className="info-item d-flex" style={styles.contactInfoItem}>
                  <i className="bi bi-envelope flex-shrink-0" style={styles.contactInfoIcon}></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" className="php-email-form" style={styles.contactForm}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required="" style={styles.formControl} />
                    </div>

                    <div className="col-md-6">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required="" style={styles.formControl} />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required="" style={styles.formControl} />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required="" style={{ ...styles.formControl, ...styles.formTextarea }}></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit" style={styles.buyBtn}>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer light-background" style={styles.footer}>
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about" style={styles.footerAbout}>
              <a href="index.html" className="logo d-flex align-items-center" style={styles.logo}>
                <span className="sitename">OnePage</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links d-flex mt-4" style={styles.socialLinks}>
                <a href="" style={styles.socialLink}><i className="bi bi-twitter-x"></i></a>
                <a href="" style={styles.socialLink}><i className="bi bi-facebook"></i></a>
                <a href="" style={styles.socialLink}><i className="bi bi-instagram"></i></a>
                <a href="" style={styles.socialLink}><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links" style={styles.footerLinks}>
              <h4 style={styles.footerLinksTitle}>Useful Links</h4>
              <ul style={styles.footerLinksList}>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Home</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>About us</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Services</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Terms of service</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links" style={styles.footerLinks}>
              <h4 style={styles.footerLinksTitle}>Our Services</h4>
              <ul style={styles.footerLinksList}>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Web Design</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Web Development</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Product Management</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Marketing</a></li>
                <li style={styles.footerLinksItem}><a href="#" style={styles.footerLinksLink}>Graphic Design</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start" style={styles.footerContact}>
              <h4 style={styles.footerLinksTitle}>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4" style={styles.copyright}>
          <p>© <span>Copyright</span> <strong className="px-1 sitename">OnePage</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center" style={styles.scrollTop}>
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader"></div>
    </div>
  );
};

export default OnePage;