// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  translation: {
    // Navigation and general
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    select_language: "Select Language",
    english: "English",
    marathi: "Marathi",
    page_title: "VMT-TECH - Digital Solution Hub",
    page_description: "Your one-stop destination for all document services",

    // Hero Section
    hero: {
      title: "VMT-TECH",
      subtitle: "Legal License & Document Service",
      description:
        "VMT-Tech Digital Solutions Hub — Your go-to place for fast, reliable, and transparent legal documentation services. We handle the paperwork, you focus on your business.",
      get_started: "Get Started",
      services: {
        fast_processing: {
          title: "Fast & Hassle-Free Processing",
          description:
            "Get your licenses and legal documents quickly without unnecessary delays",
        },
        all_in_one: {
          title: "All-in-One Legal Services",
          description:
            "From Shop Act License to GST Registration, Udyam Certificate, ITR filing, and more — everything under one roof.",
        },
        secure_process: {
          title: "Secure & Transparent Process",
          description:
            "We ensure 100% data privacy and keep you informed at every step with clear pricing and timelines.",
        },
        expert_guidance: {
          title: "Expert Guidance & Support",
          description:
            "Our experienced professionals guide you through each step, ensuring error-free applications.",
        },
      },
    },

    // About Section
    about_section: {
      title: "About Us",
      subtitle: "Why Choose VMT-TECH?",
      description1:
        "We're a team of legal and financial experts dedicated to making document processing effortless. With years of experience, we ensure:",
      bullet_points: [
        "Speed: Approval times up to 50% faster than DIY applications.",
        "Accuracy: Zero rejections due to documentation errors.",
        "Support: End-to-end assistance via call, email, or chat.",
      ],
      description2:
        "VMT-TECH is your trusted partner for Shop Act Licenses, GST Registration, Food Licenses, ITR Filing, Udyam Certificates, and more. We handle the paperwork—you focus on growth.",
      read_more: "Read More",
    },

    // Stats Section
    stats: {
      happy_clients: "Happy Clients",
      approval_rate: "Approval Rate",
      processing_time: "Avg Processing Time",
      dedicated_workers: "Dedicated Workers",
    },

    // About Alt Section
    about_alt: {
      title: "Instant Document Processing with Guaranteed Approvals",
      subtitle:
        "VMT-Tech revolutionizes license registrations with India's fastest approval system for business compliance documents.",
      bullet_points: [
        "Shop Act registration in 1 hour (₹150 only)",
        "Instant PAN with Aadhaar linkage in 2 hours",
        "GST registration with 1-day approval guarantee",
        "24/7 document tracking through our client portal",
      ],
      description:
        "Our proprietary verification system accelerates approvals that typically take weeks - Udyam registration in 4 hours, IEC certificates in 1 day, and Food Licenses with real-time status updates. Unlike conventional agents, we provide transparent pricing with no hidden charges and direct case officer access, ensuring 100% compliance for shops, factories, and import-export businesses.",
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonials",
      subtitle: "What our clients say about our services",
      testimonials: [
        {
          quote:
            "I got my Shop Act License in just 1 day with VMT-TECH! Earlier, I struggled for weeks.",
          name: "Ramesh P.",
          role: "Business Owner",
        },
        {
          quote:
            "The GST registration process was so smooth and fast. Highly recommended for all business owners.",
          name: "Sara W.",
          role: "Designer",
        },
        {
          quote:
            "The team at VMT-TECH guided me through every step of getting my FSSAI license. Their expertise saved me from multiple rejections.",
          name: "Arjun Desai",
          role: "Restaurant Owner",
          image: "testimonials-3.jpg",
        },
        {
          quote:
            "I got my Udyam certificate within hours of applying through VMT-TECH. Their digital process is incredibly efficient!",
          name: "Neha Gupta",
          role: "Handicraft Business",
          image: "testimonials-4.jpg",
        },
        {
          quote:
            "As a freelancer, I needed multiple licenses. VMT-TECH bundled everything together and saved me 60% compared to individual applications.",
          name: "Rahul Joshi",
          role: "Freelance Consultant",
          image: "testimonials-5.jpg",
        },
      ],
    },

    // Services Section
    services_section: {
      title: "Services",
      subtitle:
        "Comprehensive services for all your business documentation needs",
      document_required: "Document Required",
      book_now: "Book Now",
      read_more: "Read More",
      items: [
        {
          id: "food-license",
          title: "Food License",
          price: "₹999 +GST",
          description:
            "Mandatory for all food businesses to ensure hygiene and safety standards. Get your FSSAI registration completed within 7-10 working days.",
          documents: [
            "Aadhar Card",
            "NOC/Swyghoshit Patra",
            "Elec bill/7/12",
            "Pan Card",
            "Passport Photo",
          ],
        },
        {
          id: "shop-act-license",
          title: "Shop Act License",
          price: "₹799 +GST",
          description:
            "Required for all shop owners and commercial establishments to operate legally. Registration typically completed within 5-7 working days.",
          documents: [
            "Aadhar Card",
            "Passport Photo",
            "Signature",
            "Address Proof",
            "Rent Agreement (if rented)",
          ],
        },
        {
          id: "udyam-certificate",
          title: "Udyam Certificate",
          price: "₹499 +GST",
          description:
            "MSME registration gives small businesses quick access to government benefits, with certificates issued in 24 hours.",
          documents: [
            "Aadhar Card",
            "Pan Card",
            "Bank A/C no",
            "Aadhar linked mobile",
            "Email",
          ],
        },
        {
          id: "gst-registration",
          title: "GST Registration",
          price: "₹1499 +GST",
          description:
            "Mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for special category states). Processing time 7-10 working days.",
          documents: [
            "Aadhar and Pan Card",
            "Bank A/C no, Mob No",
            "Elec bill, Tax Receipt",
            "GPS Photos, Passport Photo",
            "Business Address Proof",
          ],
        },
        {
          id: "itr-filing",
          title: "ITR Filing",
          price: "₹999 +GST",
          description:
            "Annual filing requirement for all taxpayers with income above basic exemption limit. E-filing completed within 3-5 working days.",
          documents: [
            "Aadhar Card",
            "Pan Card",
            "Bank A/C No",
            "Aadhar linked mobile",
            "Email, Form 16/Income Proof",
          ],
        },
        {
          id: "pollution-certificate",
          title: "Pollution Certificate",
          price: "₹2999 +GST",
          description:
            "Industries must comply with environmental rules; approval takes 15–20 working days after submission.",
          documents: [
            "Aadhar Card",
            "Pan Card",
            "NOC MIDC Elec bill",
            "Blue Print",
            "Unit Photo, NOC local body",
          ],
        },
      ],
    },
  
  cta: {
    title: "Ready to Simplify Your Business Documentation?",
    description:
      "Stop struggling with paperwork! Let us handle approvals while you focus on growing your business.",
    primary_button: "Get Started Today",
    secondary_button: "Explore Services",
  },
   faq: {
    title: "Frequently Asked Questions",
    subtitle: "Get answers to common questions about our business registration services",
    q1: {
      question: "Can I get a Shop Act License without a commercial address?",
      answer: "Only if turnover exceeds ₹20L/₹40L."
    },
    q2: {
      question: "Is GST required for freelancers?",
      answer: "GST registration is mandatory for freelancers whose annual turnover exceeds ₹20 lakhs. However, if you provide services across state lines, you need to register for GST regardless of your turnover."
    },
    q3: {
      question: "How long is the FSSAI license valid?",
      answer: "FSSAI licenses are valid for 1–5 years (renewable). The duration depends on the type of license you obtain and your preference at the time of application."
    },
    q4: {
      question: "Do you offer bulk discounts for multiple services?",
      answer: "Yes! We offer a 10% discount when you purchase 3 or more services together (e.g., GST + Shop Act + ITR). Contact our sales team for larger enterprise packages."
    },
    q5: {
      question: "Can I register a company without a physical office?",
      answer: "Yes, you can register a company using a virtual office or registered address service. However, certain business types may require a physical commercial space."
    },
    q6: {
      question: "What is the processing time for trademark registration?",
      answer: "The trademark registration process typically takes 18-24 months in India. However, you can start using the ™ symbol immediately after filing your application."
    }
  },
  contact_section: {
    title: "Contact",
    subtitle: "Have questions or need assistance? Get in touch with our team today – we're here to help!",
    address_title: "Address",
    address: "A108 Adam Street, New York, NY 535022",
    call_title: "Call Us",
    phone: "+1 5589 55488 55",
    email_title: "Email Us",
    email: "info@example.com",
    form: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Message",
      loading: "Loading",
      success: "Your message has been sent. Thank you!",
      submit: "Send Message"
    }
  },
  footer: {
    company_name: "VMT-TECH",
    description: "VMT Tech is a one-stop digital solution hub that helps individuals, entrepreneurs, and businesses with essential government registrations and compliance services. The platform simplifies complex legal and financial processes by making them accessible online at affordable costs.",
    useful_links: "Useful Links",
    home: "Home",
    about_us: "About us",
    services: "Services",
    terms: "Terms of service",
    privacy: "Privacy policy",
    our_services: "Our Services",
    contact_us: "Contact Us",
    address_line1: "A108 Adam Street",
    address_line2: "New York, NY 535022",
    address_line3: "United States",
    phone: "Phone:",
    phone_number: "+1 5589 55488 55",
    email: "Email:",
    email_address: "info@example.com",
    copyright: "Copyright",
    rights_reserved: "All Rights Reserved"
  },
  services_sec: {
    food_license: "Food License",
    shop_act: "Shop Act License",
    udyam: "Udyam Certificate",
    gst: "GST Registration",
    itr: "ITR Filing"
  }
}
};

const mr = {
  translation: {
    // Navigation and general
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    contact: "संपर्क",
    select_language: "भाषा निवडा",
    english: "इंग्रजी",
    marathi: "मराठी",
    page_title: "VMT-TECH - डिजिटल सोल्यूशन हब",
    page_description: "सर्व कागदपत्र सेवांसाठी तुमचे एकमेव ठिकाण",

    // Hero Section
    hero: {
      title: "VMT-TECH",
      subtitle: "कायदेशीर परवाने आणि दस्तऐवज सेवा",
      description:
        "VMT-Tech डिजिटल सोल्यूशन्स हब - वेगवान, विश्वासार्ह आणि पारदर्शक कायदेशीर दस्तऐवजीकरण सेवांसाठी तुमचे ठिकाण. आम्ही कागदपत्रे हाताळतो, तुम्ही तुमच्या व्यवसायावर लक्ष केंद्रित करा.",
      get_started: "सुरू करा",
      services: {
        fast_processing: {
          title: "वेगवान आणि त्रासमुक्त प्रक्रिया",
          description:
            "तुमचे परवाने आणि कायदेशीर दस्तऐवज अनावश्यक विलंब न करता पटकन मिळवा",
        },
        all_in_one: {
          title: "सर्व-इन-वन कायदेशीर सेवा",
          description:
            "शॉप अॅक्ट परवान्यापासून जीएसटी नोंदणी, उद्यम प्रमाणपत्र, आयटीआर फायलिंग आणि बरेच काही — सर्वकाही एकाच छताखाली.",
        },
        secure_process: {
          title: "सुरक्षित आणि पारदर्शक प्रक्रिया",
          description:
            "आम्ही 100% डेटा गोपनीयता सुनिश्चित करतो आणि स्पष्ट किंमत आणि वेळेसह प्रत्येक टप्प्यावर तुम्हाला माहिती देतो.",
        },
        expert_guidance: {
          title: "तज्ञ मार्गदर्शन आणि समर्थन",
          description:
            "आमचे अनुभवी व्यावसायिक तुम्हाला प्रत्येक चरणात मार्गदर्शन करतात, त्रुटी-मुक्त अर्ज सुनिश्चित करतात.",
        },
      },
    },

    // About Section
    about_section: {
      title: "आमच्याबद्दल",
      subtitle: "VMT-TECH का निवडा?",
      description1:
        "आम्ही कायदेशीर आणि आर्थिक तज्ञांची एक टीम आहोत जी दस्तऐवज प्रक्रिया सुलभ करण्यासाठी समर्पित आहे. वर्षांच्या अनुभवासह, आम्ही हे सुनिश्चित करतो:",
      bullet_points: [
        "गती: DIY अर्जांच्या तुलनेत 50% वेगवान मंजुरी वेळ.",
        "अचूकता: दस्तऐवजीकरण त्रुटींमुळे शून्य नकार.",
        "समर्थन: कॉल, ईमेल किंवा चॅट द्वारे संपूर्ण सहाय्य.",
      ],
      description2:
        "VMT-TECH शॉप अॅक्ट परवाने, जीएसटी नोंदणी, अन्न परवाने, आयटीआर फायलिंग, उद्यम प्रमाणपत्रे आणि बरेच काही साठी तुमचा विश्वासू भागीदार आहे. आम्ही कागदपत्रे हाताळतो — तुम्ही वाढीवर लक्ष केंद्रित करा.",
      read_more: "अधिक वाचा",
    },

    // Stats Section
    stats: {
      happy_clients: "आनंदी ग्राहक",
      approval_rate: "मंजुरी दर",
      processing_time: "सरासरी प्रक्रिया वेळ",
      dedicated_workers: "समर्पित कर्मचारी",
    },

    // About Alt Section
    about_alt: {
      title: "हमखास मंजुरीसह त्वरित दस्तऐवज प्रक्रिया",
      subtitle:
        "VMT-Tech व्यवसाय अनुपालन दस्तऐवजांसाठी भारतातील सर्वात वेगवान मंजुरी प्रणालीसह परवाना नोंदणीमध्ये क्रांती आणते.",
      bullet_points: [
        "1 तासात शॉप अॅक्ट नोंदणी (फक्त ₹150)",
        "2 तासात आधार लिंकेजसह तात्काळ PAN",
        "1-दिवस मंजुरी हमीसह जीएसटी नोंदणी",
        "आमच्या क्लायंट पोर्टलद्वारे 24/7 दस्तऐवज ट्रॅकिंग",
      ],
      description:
        "आमची मालकीची पडताळणी प्रणाली सामान्यत: आठवडे लागणाऱ्या मंजुरीला गती देते - 4 तासात उद्यम नोंदणी, 1 दिवसात IEC प्रमाणपत्रे आणि रिअल-टाइम स्थिती अद्यतनांसह अन्न परवाने. पारंपारिक एजंट्सच्या विपरीत, आम्ही लपलेल्या शुल्काशिवाय पारदर्शक किंमत आणि थेट केस अधिकारी प्रवेश प्रदान करतो, दुकाने, कारखाने आणि आयात-निर्यात व्यवसायांसाठी 100% अनुपालन सुनिश्चित करतो.",
    },
    // Testimonials Section
    testimonials: {
      title: "प्रतिक्रिया",
      subtitle: "आमच्या सेवांबद्दल आमचे क्लायंट काय म्हणतात",
      testimonials: [
        {
          quote:
            "मला VMT-TECH मधे फक्त 1 दिवसात माझा शॉप अॅक्ट परवाना मिळाला! याआधी, मी आठवड्यांपासून प्रयत्न करत होतो.",
          name: "रमेश प.",
          role: "व्यवसाय मालक",
        },
        {
          quote:
            "जीएसटी नोंदणी प्रक्रिया खूप सहज आणि वेगवान होती. सर्व व्यवसाय मालकांसाठी शिफारस करतो.",
          name: "सारा वि.",
          role: "डिझायनर",
        },
        {
          quote:
            "VMT-TECH च्या टीमने मला FSSAI परवाना मिळविण्याच्या प्रत्येक चरणात मार्गदर्शन केले. त्यांच्या तज्ञतेमुळे मला अनेक नाकारण्यांतून वाचवले.",
          name: "अर्जुन देसाई",
          role: "रेस्टॉरंट मालक",
          image: "testimonials-3.jpg",
        },
        {
          quote:
            "VMT-TECH मार्गे अर्ज केल्यानंतर काही तासांतच मला माझा उद्यम प्रमाणपत्र मिळाला. त्यांची डिजिटल प्रक्रिया अविश्वसनीयपणे कार्यक्षम आहे!",
          name: "नेहा गुप्ता",
          role: "हस्तकला व्यवसाय",
          image: "testimonials-4.jpg",
        },
        {
          quote:
            "फ्रीलान्सर म्हणून मला अनेक परवान्यांची आवश्यकता होती. VMT-TECH ने सर्वकाही एकत्रित केले आणि वैयक्तिक अर्जांपेक्षा मला 60% वाचवले.",
          name: "राहुल जोशी",
          role: "फ्रीलान्स सल्लागार",
          image: "testimonials-5.jpg",
        },
      ],
    },

    // Services Section
    services_section: {
      title: "सेवा",
      subtitle: "तुमच्या सर्व व्यवसाय दस्तऐवजीकरण गरजांसाठी व्यापक सेवा",
      document_required: "आवश्यक दस्तऐवज",
      book_now: "आता बुक करा",
      read_more: "अधिक वाचा",
      items: [
        {
          id: "food-license",
          title: "अन्न परवाना",
          price: "₹999 +GST",
          description:
            "सर्व अन्न व्यवसायांसाठी आवश्यक असून आरोग्य आणि सुरक्षा मानकांना पुरवण्यासाठी. तुमची FSSAI नोंदणी 7-10 कामकाजाच्या दिवसांत पूर्ण करा.",
          documents: [
            "आधार कार्ड",
            "NOC/स्वयंघोषित पत्र",
            "वीज बील/7-12",
            "पॅन कार्ड",
            "पासपोर्ट फोटो",
          ],
        },
        {
          id: "shop-act-license",
          title: "शॉप अॅक्ट परवाना",
          price: "₹799 +GST",
          description:
            "सर्व दुकान मालकांसाठी आणि वाणिज्यिक संस्थांसाठी कायदेशीररित्या काम करण्यासाठी आवश्यक. नोंदणी सामान्यत: 5-7 कामकाजाच्या दिवसांत पूर्ण होते.",
          documents: [
            "आधार कार्ड",
            "पासपोर्ट फोटो",
            "सही",
            "पत्ता पुरावा",
            "भाडेकरार (भाड्याने असल्यास)",
          ],
        },
        {
          id: "udyam-certificate",
          title: "उद्यम प्रमाणपत्र",
          price: "₹499 +GST",
          description:
            "लघुउद्योगांना शासकीय लाभ मिळवण्यासाठी एमएसएमई नोंदणी, प्रमाणपत्र २४ तासांत उपलब्ध.",
          documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "बँक खाते क्रमांक",
            "आधार लिंक केलेला मोबाइल",
            "ईमेल",
          ],
        },
        {
          id: "gst-registration",
          title: "GST नोंदणी",
          price: "₹1499 +GST",
          description:
            "₹40 लाखांपेक्षा जास्त उलाढाल असलेल्या व्यवसायांसाठी अनिवार्य (विशेष श्रेणीतील राज्यांसाठी ₹20 लाख). प्रक्रिया वेळ 7-10 कामकाजाचे दिवस.",
          documents: [
            "आधार आणि पॅन कार्ड",
            "बँक खाते क्रमांक, मोबाइल नंबर",
            "वीज बील, कर पावती",
            "GPS फोटो, पासपोर्ट फोटो",
            "व्यवसायाच्या पत्त्याचा पुरावा",
          ],
        },
        {
          id: "itr-filing",
          title: "ITR फायलिंग",
          price: "₹999 +GST",
          description:
            "मूलभूत सूट मर्यादेपेक्षा जास्त उत्पन्न असलेल्या सर्व करदात्यांसाठी वार्षिक फायलिंग आवश्यकता. ई-फायलिंग 3-5 कामकाजाच्या दिवसांत पूर्ण.",
          documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "बँक खाते क्रमांक",
            "आधार लिंक केलेला मोबाइल",
            "ईमेल, फॉर्म 16/उत्पन्न पुरावा",
          ],
        },
        {
          id: "pollution-certificate",
          title: "प्रदूषण प्रमाणपत्र",
          price: "₹2999 +GST",
          description:
            "उद्योगांना पर्यावरणीय नियमांचे पालन बंधनकारक; कागदपत्रे सादर केल्यानंतर १५–२० कामकाजाच्या दिवसांत मंजुरी.",
          documents: [
            "आधार कार्ड",
            "पॅन कार्ड",
            "NOC MIDC वीज बील",
            "ब्लू प्रिंट",
            "युनिट फोटो, NOC स्थानिक संस्था",
          ],
        },
      ],
    },
    cta_section: {
      title: "कॉल टू एक्शन",
      description:
        "कागदपत्रांच्या गडबडीत अडकू नका! VMT-Tech मंजुरीची काळजी घेईल, तर तुम्ही तुमच्या व्यवसायावर लक्ष केंद्रित करा.",
      button_text: "कृती करा",
    },
  faq: {
    title: "नेहमी विचारले जाणारे प्रश्न",
    subtitle: "आमच्या व्यवसाय नोंदणी सेवांबद्दल सामान्य प्रश्नांची उत्तरे मिळवा",
    q1: {
      question: "व्यावसायिक पत्त्याशिवाय मी शॉप अॅक्ट लायसन्स मिळवू शकतो का?",
      answer: "फक्त जर उलाढाल ₹20 लाख/₹40 लाख पेक्षा जास्त असेल तर."
    },
    q2: {
      question: "फ्रीलान्सर्ससाठी GST आवश्यक आहे का?",
      answer: "ज्या फ्रीलान्सर्सची वार्षिक उलाढाल ₹20 लाखांपेक्षा जास्त आहे त्यांच्यासाठी GST नोंदणी अनिवार्य आहे. तथापि, जर तुम्ही राज्यांतर सेवा पुरवत असाल तर, तुमच्या उलाढालीची पर्वा न करता तुम्हाला GST साठी नोंदणी करणे आवश्यक आहे."
    },
    q3: {
      question: "FSSAI परवाना किती काळ वैध असतो?",
      answer: "FSSAI परवाने 1-5 वर्षांसाठी वैध असतात (नूतनीकरण करता येते). कालावधी तुम्ही कोणत्या प्रकारचा परवाना घेतला आणि अर्ज करताना तुमची प्राधान्यक्रमे यावर अवलंबून असतो."
    },
    q4: {
      question: "तुम्ही एकाधिक सेवांसाठी सवलत देतात का?",
      answer: "होय! जेव्हा तुम्ही 3 किंवा अधिक सेवा एकत्र खरेदी करता (उदा. GST + शॉप अॅक्ट + ITR) तेव्हा आम्ही 10% सूट देतो. मोठ्या एंटरप्राइझ पॅकेजेससाठी आमच्या विक्री संघाशी संपर्क साधा."
    },
    q5: {
      question: "भौतिक कार्यालयाशिवाय मी कंपनी नोंदणी करू शकतो का?",
      answer: "होय, तुम्ही व्हर्च्युअल ऑफिस किंवा नोंदणीकृत पत्ता सेवा वापरून कंपनी नोंदणी करू शकता. तथापि, काही व्यवसाय प्रकारांसाठी भौतिक व्यावसायिक जागा आवश्यक असू शकते."
    },
    q6: {
      question: "ट्रेडमार्क नोंदणीसाठी प्रक्रिया वेळ किती आहे?",
      answer: "भारतात ट्रेडमार्क नोंदणी प्रक्रियेस साधारणपणे 18-24 महिने लागतात. तथापि, तुम्ही अर्ज सबमिट केल्यानंतर लगेच ™ चिन्ह वापरण्यास सुरुवात करू शकता."
    }
  },
  contact_section: {
    title: "संपर्क",
    subtitle: "तुम्हाला प्रश्न आहेत किंवा मदत हवी आहे? आजच आमच्या संघाशी संपर्क साधा - आम्ही मदतीसाठी उपलब्ध आहोत!",
    address_title: "पत्ता",
    address: "ए108 अॅडम स्ट्रीट, न्यू यॉर्क, NY 535022",
    call_title: "आम्हाला कॉल करा",
    phone: "+1 5589 55488 55",
    email_title: "ईमेल पाठवा",
    email: "info@example.com",
    form: {
      name: "तुमचे नाव",
      email: "तुमचा ईमेल",
      subject: "विषय",
      message: "संदेश",
      loading: "लोड होत आहे",
      success: "तुमचा संदेश पाठवला गेला आहे. धन्यवाद!",
      submit: "संदेश पाठवा"
    }
  },
  footer: {
    company_name: "व्हीएमटी-टेक",
    description: "व्हीएमटी टेक हे एक स्टॉप डिजिटल सोल्यूशन हब आहे जे व्यक्ती, उद्योजक आणि व्यवसायांना आवश्यक सरकारी नोंदणी आणि अनुपालन सेवांसह मदत करते. हे प्लॅटफॉर्म किफायतशीर किंमतीत ऑनलाइन प्रवेश करण्यायोग्य करून क्लिष्ट कायदेशीर आणि आर्थिक प्रक्रिया सुलभ करते.",
    useful_links: "उपयुक्त दुवे",
    home: "मुख्यपृष्ठ",
    about_us: "आमच्याबद्दल",
    services: "सेवा",
    terms: "सेवा अटी",
    privacy: "गोपनीयता धोरण",
    our_services: "आमच्या सेवा",
    contact_us: "आमच्याशी संपर्क साधा",
    address_line1: "ए108 अॅडम स्ट्रीट",
    address_line2: "न्यू यॉर्क, NY 535022",
    address_line3: "युनायटेड स्टेट्स",
    phone: "फोन:",
    phone_number: "+1 5589 55488 55",
    email: "ईमेल:",
    email_address: "info@example.com",
    copyright: "कॉपीराइट",
    rights_reserved: "सर्व हक्क राखीव"
  },
  services_sec: {
    food_license: "अन्न परवाना",
    shop_act: "दुकान अॅक्ट परवाना",
    udyam: "उद्यम प्रमाणपत्र",
    gst: "GST नोंदणी",
    itr: "ITR भरणे"
  }
  }
};


i18n.use(initReactI18next).init({
  resources: {
    en: en,
    mr: mr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
