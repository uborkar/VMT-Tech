 
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faStore, 
  faCertificate, 
  faFileInvoiceDollar,
  faFileAlt,
  faIndustry,
  faSearch,
  faCheck,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ServicesPage.css'; // Custom CSS for flip cards and animations

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Service data with Marathi support
const servicesData = {
  "food-license": {
    id: "food-license",
    title: {
      en: "Food License",
      mr: "अन्न परवाना",
    },
    price: "₹999 +GST",
    description: {
      en: "Mandatory for all food businesses to ensure hygiene and safety standards.",
      mr: "सर्व अन्न व्यवसायांसाठी आवश्यक स्वच्छता आणि सुरक्षा मानकांना पाठबळ देण्यासाठी.",
    },
    processingTime: {
      en: "7-10 working days",
      mr: "7-10 कामकाजाचे दिवस",
    },
    documents: {
      en: [
        "Aadhar Card",
        "NOC/Swyghoshit Patra",
        "Electricity bill/7/12",
        "Pan Card",
        "Passport Photo",
      ],
      mr: [
        "आधार कार्ड",
        "NOC/स्वीकृत पत्र",
        "वीज बिल/7/12",
        "पॅन कार्ड",
        "पासपोर्ट फोटो",
      ],
    },
    benefits: {
      en: [
        "Legal permission to operate food business",
        "Builds customer trust",
        "Required for FSSAI compliance",
        "Valid for 1-5 years",
      ],
      mr: [
        "अन्न व्यवसाय चालविण्याची कायदेशीर परवानगी",
        "ग्राहक विश्वास निर्माण करते",
        "FSSAI पालनासाठी आवश्यक",
        "1-5 वर्षांसाठी वैध",
      ],
    },
    procedure: {
      en: [
        "Document collection",
        "Application preparation",
        "Submission to authorities",
        "Follow-up and approval",
      ],
      mr: [
        "कागदपत्रे गोळा करणे",
        "अर्ज तयार करणे",
        "अधिकाऱ्यांकडे सादर करणे",
        "फॉलो-अप आणि मंजुरी",
      ],
    },
  },
  "shop-act-license": {
    id: "shop-act-license",
    title: {
      en: "Shop Act License",
      mr: "दुकान कायदा परवाना",
    },
    price: "₹799 +GST",
    description: {
      en: "Required for all shop owners and commercial establishments to operate legally.",
      mr: "सर्व दुकान मालकांसाठी आणि वाणिज्यिक संस्थांसाठी कायदेशीररित्या काम करण्यासाठी आवश्यक.",
    },
    processingTime: {
      en: "5-7 working days",
      mr: "5-7 कामकाजाचे दिवस",
    },
    documents: {
      en: [
        "Aadhar Card",
        "Passport Photo",
        "Signature",
        "Address Proof",
        "Rent Agreement (if rented)",
      ],
      mr: [
        "आधार कार्ड",
        "पासपोर्ट फोटो",
        "सही",
        "पत्ता पुरावा",
        "भाडेकरार (भाड्याने घेतल्यास)",
      ],
    },
    benefits: {
      en: [
        "Legal recognition of your business",
        "Required for bank accounts",
        "Protection under labor laws",
        "Valid for lifetime (no renewal needed)",
      ],
      mr: [
        "तुमच्या व्यवसायाची कायदेशीर ओळख",
        "बँक खात्यांसाठी आवश्यक",
        "कामगार कायद्यांतर्गत संरक्षण",
        "आयुष्यभर वैध (नूतनीकरण आवश्यक नाही)",
      ],
    },
  },
  "udyam-certificate": {
    id: "udyam-certificate",
    title: {
      en: "Udyam Certificate",
      mr: "उद्यम प्रमाणपत्र",
    },
    price: "₹499 +GST",
    description: {
      en: "MSME registration for small businesses to avail government benefits.",
      mr: "लहान व्यवसायांसाठी सरकारी लाभ मिळविण्यासाठी MSME नोंदणी.",
    },
    processingTime: {
      en: "24 hours",
      mr: "24 तास",
    },
    documents: {
      en: [
        "Aadhar Card",
        "Pan Card",
        "Bank Account number",
        "Aadhar linked mobile",
        "Email",
      ],
      mr: [
        "आधार कार्ड",
        "पॅन कार्ड",
        "बँक खाते क्रमांक",
        "आधार लिंक केलेला मोबाइल",
        "ईमेल",
      ],
    },
    benefits: {
      en: [
        "Access to government subsidies",
        "Lower interest rates on loans",
        "Tax benefits",
        "Eligibility for government tenders",
      ],
      mr: [
        "सरकारी अनुदानांना प्रवेश",
        "कर्जावरील कमी व्याज दर",
        "कर लाभ",
        "सरकारी टेंडरसाठी पात्रता",
      ],
    },
  },
  "gst-registration": {
    id: "gst-registration",
    title: {
      en: "GST Registration",
      mr: "GST नोंदणी",
    },
    price: "₹1499 +GST",
    description: {
      en: "Mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for special category states).",
      mr: "₹40 लाखांपेक्षा जास्त उलाढाल असलेल्या व्यवसायांसाठी अनिवार्य (विशेष श्रेणीतील राज्यांसाठी ₹20 लाख).",
    },
    processingTime: {
      en: "7-10 working days",
      mr: "7-10 कामकाजाचे दिवस",
    },
    documents: {
      en: [
        "Aadhar and Pan Card",
        "Bank Account number, Mobile No",
        "Electricity bill, Tax Receipt",
        "GPS Photos, Passport Photo",
        "Business Address Proof",
      ],
      mr: [
        "आधार आणि पॅन कार्ड",
        "बँक खाते क्रमांक, मोबाइल नंबर",
        "वीज बिल, कर पावती",
        "GPS फोटो, पासपोर्ट फोटो",
        "व्यवसाय पत्ता पुरावा",
      ],
    },
    benefits: {
      en: [
        "Legal authorization to collect tax",
        "Input tax credit benefits",
        "Required for e-commerce sellers",
        "Valid until surrendered or cancelled",
      ],
      mr: [
        "कर गोळा करण्याची कायदेशीर परवानगी",
        "इनपुट कर क्रेडिट फायदे",
        "ई-कॉमर्स विक्रेत्यांसाठी आवश्यक",
        "सरेंडर किंवा रद्द होईपर्यंत वैध",
      ],
    },
  },
  "itr-filing": {
    id: "itr-filing",
    title: {
      en: "ITR Filing",
      mr: "ITR दाखल करणे",
    },
    price: "₹999 +GST",
    description: {
      en: "Annual filing requirement for all taxpayers with income above basic exemption limit.",
      mr: "मूलभूत सूट मर्यादेपेक्षा जास्त उत्पन्न असलेल्या सर्व करदात्यांसाठी वार्षिक दाखल करण्याची आवश्यकता.",
    },
    processingTime: {
      en: "3-5 working days",
      mr: "3-5 कामकाजाचे दिवस",
    },
    documents: {
      en: [
        "Aadhar Card",
        "Pan Card",
        "Bank Account No",
        "Aadhar linked mobile",
        "Email, Form 16/Income Proof",
      ],
      mr: [
        "आधार कार्ड",
        "पॅन कार्ड",
        "बँक खाते क्रमांक",
        "आधार लिंक केलेला मोबाइल",
        "ईमेल, फॉर्म 16/उत्पन्न पुरावा",
      ],
    },
    benefits: {
      en: [
        "Avoid penalties for late filing",
        "Required for loans/visas",
        "Claim tax refunds",
        "Maintain financial records",
      ],
      mr: [
        "उशीरा दाखल करण्यासाठी दंड टाळा",
        "कर्ज/व्हिसासाठी आवश्यक",
        "कर परतावा मिळवा",
        "आर्थिक नोंदी राखून ठेवा",
      ],
    },
  },
  "pollution-certificate": {
    id: "pollution-certificate",
    title: {
      en: "Pollution Certificate",
      mr: "प्रदूषण प्रमाणपत्र",
    },
    price: "₹2999 +GST",
    description: {
      en: "Mandatory for industries to ensure compliance with environmental regulations.",
      mr: "पर्यावरण नियमांचे पालन सुनिश्चित करण्यासाठी उद्योगांसाठी अनिवार्य.",
    },
    processingTime: {
      en: "15-20 working days",
      mr: "15-20 कामकाजाचे दिवस",
    },
    documents: {
      en: [
        "Aadhar Card",
        "Pan Card",
        "NOC MIDC Electricity bill",
        "Blue Print",
        "Unit Photo, NOC local body",
      ],
      mr: [
        "आधार कार्ड",
        "पॅन कार्ड",
        "NOC MIDC वीज बिल",
        "ब्लू प्रिंट",
        "युनिट फोटो, स्थानिक संस्था NOC",
      ],
    },
    benefits: {
      en: [
        "Legal compliance for industries",
        "Avoid shutdown notices",
        "Environmental responsibility",
        "Valid for 5 years (renewable)",
      ],
      mr: [
        "उद्योगांसाठी कायदेशीर अनुपालन",
        "शटडाउन नोटीस टाळा",
        "पर्यावरणीय जबाबदारी",
        "5 वर्षांसाठी वैध (नूतनीकरण करण्यायोग्य)",
      ],
    },
  },
};


  // Filter services based on search and category
  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle language toggle
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`services-page ${i18n.language === 'mr' ? 'marathi-font' : ''}`}>
      {/* Language Selector */}
      <div className="language-selector">
        <button 
          onClick={() => changeLanguage('en')} 
          className={i18n.language === 'en' ? 'active' : ''}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('mr')} 
          className={i18n.language === 'mr' ? 'active' : ''}
        >
          मराठी
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{t('services.hero_title', 'Our Services')}</h1>
          <p>{t('services.hero_subtitle', 'Comprehensive solutions for your business needs')}</p>
          <a href="#service-grid" className="cta-button">
            {t('services.explore_btn', 'Explore Services')}
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section id="service-grid" className="services-container">
        {/* Filter Options */}
        <div className="filter-options">
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder={t('services.search_placeholder', 'Search services...')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-tags">
            <button
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => setActiveCategory('all')}
            >
              {t('services.all_categories', 'All')}
            </button>
            <button
              className={activeCategory === 'legal' ? 'active' : ''}
              onClick={() => setActiveCategory('legal')}
            >
              {t('services.legal', 'Legal')}
            </button>
            {/* Add more categories as needed */}
          </div>
        </div>

        {/* Services Grid with Flip Cards */}
        <div className="services-grid">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <div key={service.id} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <div className="flip-card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h3>{i18n.language === 'mr' ? service.name_mar : service.name}</h3>
                    <div className="price">
                      {i18n.language === 'mr' ? service.price_mar : service.price}
                    </div>
                    <div className="documents">
                      <p>{t('services.documents_required', 'Documents Required')}:</p>
                      <ul>
                        {(i18n.language === 'mr' ? service.documents_mar : service.documents).map((doc, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faCheck} /> {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="flip-card-back">
                    <div className="back-icon">
                      <FontAwesomeIcon icon={service.backIcon} />
                    </div>
                    <h3>{i18n.language === 'mr' ? service.name_mar : service.name}</h3>
                    <p>{i18n.language === 'mr' ? service.description_mar : service.description}</p>
                    <div className="action-buttons">
                      <button 
                        className="btn-primary"
                        onClick={() => {
                          setSelectedService(service);
                          setShowModal(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faPaperPlane} />{' '}
                        {t('services.book_now', 'Book Now')}
                      </button>
                      <Link 
                        to={`/services/${service.id}`} 
                        className="btn-secondary"
                      >
                        {t('services.read_more', 'Read More')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h4>{t('services.no_results', 'No services found')}</h4>
              <p>{t('services.try_again', 'Try adjusting your search or filter criteria')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {showModal && selectedService && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <div className="modal-header">
              <div className="service-icon">
                <FontAwesomeIcon icon={selectedService.icon} />
              </div>
              <div>
                <h2>{i18n.language === 'mr' ? selectedService.name_mar : selectedService.name}</h2>
                <span className="category-badge">
                  {t(`services.categories.${selectedService.category}`, selectedService.category)}
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: i18n.language === 'mr' ? 
                    selectedService.details_mar : 
                    selectedService.details 
                }} 
              />
              <div className="required-docs">
                <h4>{t('services.documents_required', 'Documents Required')}:</h4>
                <ul>
                  {(i18n.language === 'mr' ? selectedService.documents_mar : selectedService.documents).map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn-secondary" 
                onClick={() => setShowModal(false)}
              >
                {t('services.close', 'Close')}
              </button>
              <Link 
                to={`/book/${selectedService.id}`} 
                className="btn-primary"
              >
                {t('services.book_now', 'Book Now')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;