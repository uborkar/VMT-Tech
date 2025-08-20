import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import Header from "../component/Header";
import Footer from "../component/Footer";


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

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-not-found">
        <Header />
        <div className="container py-5 text-center">
          <h1>{t("serviceNotFound")}</h1>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/services")}
          >
            {t("backToServices")}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const getTranslatedContent = (content) => {
    return content[currentLanguage] || content.en;
  };

  const handleBookNow = () => {
    navigate(`/book/${serviceId}`);
  };

  return (
    <div className="service-detail-page">
      <Helmet>
        <title>{getTranslatedContent(service.title)} | VMT-TECH</title>
        <meta
          name="description"
          content={getTranslatedContent(service.description)}
        />
      </Helmet>

      <Header />

     <section
  className="service-hero position-relative py-5 text-white"
  style={{
    backgroundImage: "url('/assets/img/hero-bg-abstract.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
  }}
>
  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

  <div className="container position-relative z-1">
    <div className="row align-items-center">
      <div className="col-lg-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-white text-decoration-none">
                {t("home")}
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/services" className="text-white text-decoration-none">
                {t("services")}
              </a>
            </li>
            <li className="breadcrumb-item active text-light" aria-current="page">
              {getTranslatedContent(service.title)}
            </li>
          </ol>
        </nav>

        {/* Hero Content */}
        <h1 className="fw-bold mb-3">{getTranslatedContent(service.title)}</h1>
        <p className="lead mb-4">{getTranslatedContent(service.description)}</p>

        {/* Price Badge */}
        <div className="price-badge bg-white rounded-pill d-inline-flex align-items-center shadow-sm px-3 py-2">
          <span className="price bg-theme text-white rounded-pill px-3 py-1 me-2 fw-semibold">
            {service.price}
          </span>
          <span className="processing-time text-dark small">
            {t("processingTime")}: {getTranslatedContent(service.processingTime)}
          </span>
        </div>
      </div>

      <div className="col-lg-4 d-none d-lg-flex justify-content-center">
        <div className="service-icon-box bg-white rounded-circle p-4 shadow">
          <i className="bi bi-file-earmark-text-fill text-theme fs-1"></i>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Service Details Section */}
<section className="section py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        {/* Service Description */}
        <div className="service-description mb-5">
          <h2 className="fw-bold mb-3 text-theme">{t("serviceDescription")}</h2>
          <p className="fs-5 text-muted">{getTranslatedContent(service.description)}</p>
        </div>

        {/* Documents Required */}
        <div className="documents-required mb-5">
          <h2 className="fw-bold mb-3 text-theme">{t("documentsRequired")}</h2>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                {getTranslatedContent(service.documents).map((doc, index) => (
                  <li key={index} className="py-2 border-bottom d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-theme me-2"></i>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        {service.benefits && (
          <div className="benefits mb-5">
            <h2 className="fw-bold mb-3 text-theme">{t("keyBenefits")}</h2>
            <div className="row g-4">
              {getTranslatedContent(service.benefits).map((benefit, index) => (
                <div key={index} className="col-md-6">
                  <div className="benefit-card h-100 p-4 border rounded bg-white shadow-sm">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-star-fill text-theme me-2"></i>
                      <h5 className="mb-0">{t("benefit")} {index + 1}</h5>
                    </div>
                    <p className="mb-0 text-muted">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Procedure */}
        {service.procedure && (
          <div className="procedure mb-5">
            <h2 className="fw-bold mb-3 text-theme">{t("ourProcess")}</h2>
            <div className="process-steps">
              {getTranslatedContent(service.procedure).map((step, index) => (
                <div key={index} className="process-step position-relative ps-4 pb-4">
                  <div className="step-number bg-theme text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                       style={{ width: "36px", height: "36px" }}>
                    {index + 1}
                  </div>
                  <div className="step-content bg-white p-3 rounded shadow-sm ms-2">
                    <h6 className="fw-semibold mb-1">{t("step")} {index + 1}</h6>
                    <p className="mb-0 text-muted">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="col-lg-4">
        <div className="service-sidebar card border-0 shadow-sm " style={{ top: "20px" }}>
          <div className="card-body">
            <h4 className="card-title text-center mb-4 text-theme">{t("getThisService")}</h4>

            <div className="price-box text-center mb-4">
              <span className="price display-5 fw-bold text-theme d-block">{service.price}</span>
              <span className="price-note text-muted small d-block">
                + {t("governmentFeesIfApplicable")}
              </span>
            </div>

            <button className="btn btn-theme btn-lg w-100 mb-4" onClick={handleBookNow}>
              {t("bookNow")}
            </button>

            <div className="service-highlights mb-4">
              {["approvalGuarantee", "expertAssistance", "secureDocumentHandling", "realTimeUpdates"].map((item, i) => (
                <div key={i} className="highlight-item d-flex align-items-center mb-3">
                  <i className="bi bi-check-circle-fill text-theme me-2"></i>
                  <span>{t(item)}</span>
                </div>
              ))}
            </div>

            <div className="support-contact text-center">
              <p className="text-muted mb-3">{t("needHelpContactUs")}</p>
              <a href="tel:+919876543210" className="btn btn-outline-theme w-100 mb-2">
                <i className="bi bi-telephone me-2"></i> {t("callNow")}
              </a>
              <a href="mailto:support@vmt-tech.com" className="btn btn-outline-theme w-100">
                <i className="bi bi-envelope me-2"></i> {t("emailUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}

export default ServiceDetailPage;
