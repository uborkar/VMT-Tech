
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";

function BookingPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    documents: []
  });

  const serviceTitles = {
    "food-license": t("services.foodLicense"),
    "shop-act-license": t("services.shopActLicense"),
    "udyam-certificate": t("services.udyamCertificate"),
    "gst-registration": t("services.gstRegistration"),
    "itr-filing": t("services.itrFiling"),
    "pollution-certificate": t("services.pollutionCertificate")
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleDocumentToggle = (doc) => {
    setFormData(prev => {
      if (prev.documents.includes(doc)) {
        return {
          ...prev,
          documents: prev.documents.filter(d => d !== doc)
        };
      } else {
        return {
          ...prev,
          documents: [...prev.documents, doc]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    navigate('/booking-confirmation', { state: { serviceId } });
  };

  const renderServiceForm = () => {
    switch (serviceId) {
      case "food-license":
        return <FoodLicenseForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      case "shop-act-license":
        return <ShopActForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      case "udyam-certificate":
        return <UdyamForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      case "gst-registration":
        return <GSTForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      case "itr-filing":
        return <ITRForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      case "pollution-certificate":
        return <PollutionForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} t={t} />;
      default:
        return <DefaultForm formData={formData} handleChange={handleChange} t={t} />;
    }
  };

  return (
    <div className="booking-page">
      <Helmet>
        <title>{t("booking.pageTitle", { service: serviceTitles[serviceId] || t("services.default") })} | VMT-TECH</title>
      </Helmet>
      <Header />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="booking-header mb-5 text-center">
                <h1>{t("booking.title", { service: serviceTitles[serviceId] || t("services.default") })}</h1>
                <p className="lead">{t("booking.subtitle")}</p>
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                {renderServiceForm()}

                <div className="form-section mb-5">
                  <h3 className="section-title">{t("documentUpload.title")}</h3>
                  <p className="text-muted mb-4">
                    {t("documentUpload.description")}
                  </p>
                  
                  <div className="documents-checklist">
                    {getDocumentsForService(serviceId, t).map((doc, index) => (
                      <div key={index} className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`doc-${index}`}
                          checked={formData.documents.includes(doc)}
                          onChange={() => handleDocumentToggle(doc)}
                        />
                        <label className="form-check-label" htmlFor={`doc-${index}`}>
                          {doc}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-section mb-5">
                  <h3 className="section-title">{t("payment.title")}</h3>
                  <div className="payment-options">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="pay-now"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="pay-now">
                        {t("payment.payNow", { price: getServicePrice(serviceId) })}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="pay-later"
                      />
                      <label className="form-check-label" htmlFor="pay-later">
                        {t("payment.payLater")}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    {t("booking.submitButton")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


// Form Components
const FoodLicenseForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Business Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label className="form-label">Application Type</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="license_type" id="new-license" 
                   value="new" checked={formData.license_type === 'new'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="new-license">New License</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="license_type" id="renewal" 
                   value="renewal" checked={formData.license_type === 'renewal'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="renewal">Renewal</label>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="business_name" className="form-label">Business Name</label>
        <input type="text" className="form-control" id="business_name" name="business_name" 
               value={formData.business_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="applicant_name" className="form-label">Applicant Name (As per Aadhaar)</label>
        <input type="text" className="form-control" id="applicant_name" name="applicant_name" 
               value={formData.applicant_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="nature_of_business" className="form-label">Nature of Business</label>
        <input type="text" className="form-control" id="nature_of_business" name="nature_of_business" 
               value={formData.nature_of_business} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Business Address</h3>
    <div className="row">
      <div className="col-12 mb-3">
        <label htmlFor="office_address" className="form-label">Complete Address</label>
        <textarea className="form-control" id="office_address" name="office_address" rows="3" 
                  value={formData.office_address} onChange={handleChange} required></textarea>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" 
               value={formData.state} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <input type="text" className="form-control" id="district" name="district" 
               value={formData.district} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="taluka" className="form-label">Taluka</label>
        <input type="text" className="form-control" id="taluka" name="taluka" 
               value={formData.taluka} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pincode" className="form-label">PIN Code</label>
        <input type="text" className="form-control" id="pincode" name="pincode" pattern="[0-9]{6}" 
               maxLength="6" value={formData.pincode} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Personal Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="pan_no" className="form-label">PAN Number</label>
        <input type="text" className="form-control" id="pan_no" name="pan_no" 
               pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" value={formData.pan_no} onChange={handleChange} required />
        <small className="text-muted">Format: ABCDE1234F</small>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="aadhar_no" className="form-label">Aadhaar Number</label>
        <input type="text" className="form-control" id="aadhar_no" name="aadhar_no" pattern="[0-9]{12}" 
               maxLength="12" value={formData.aadhar_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile_no" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} required />
      </div>
    </div>
  </div>
);

const ShopActForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Business Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="shop_name" className="form-label">Business Name</label>
        <input type="text" className="form-control" id="shop_name" name="shop_name" 
               value={formData.shop_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="owner_name" className="form-label">Applicant Name</label>
        <input type="text" className="form-control" id="owner_name" name="owner_name" 
               value={formData.owner_name} onChange={handleChange} required />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="res_address" className="form-label">Office Address</label>
        <textarea className="form-control" id="res_address" name="res_address" rows="3" 
                  value={formData.res_address} onChange={handleChange} required></textarea>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" 
               value={formData.state} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <input type="text" className="form-control" id="district" name="district" 
               value={formData.district} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="taluka" className="form-label">Taluka</label>
        <input type="text" className="form-control" id="taluka" name="taluka" 
               value={formData.taluka} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pincode" className="form-label">PIN Code</label>
        <input type="text" className="form-control" id="pincode" name="pincode" pattern="[0-9]{6}" 
               maxLength="6" value={formData.pincode} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="date" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="date" name="date" 
               value={formData.date} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Contact Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="aadhaar" className="form-label">Aadhaar Number</label>
        <input type="text" className="form-control" id="aadhaar" name="aadhaar" pattern="\d{12}" 
               maxLength="12" value={formData.aadhaar} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} />
      </div>
    </div>

    <h3 className="section-title mt-4">Business Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="commencement_date" className="form-label">Date of Commencement</label>
        <input type="date" className="form-control" id="commencement_date" name="commencement_date" 
               value={formData.commencement_date} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="business_type" className="form-label">Nature of Business</label>
        <input type="text" className="form-control" id="business_type" name="business_type" 
               value={formData.business_type} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="emp_male" className="form-label">Male Employees</label>
        <input type="number" className="form-control" id="emp_male" name="emp_male" min="0" 
               value={formData.emp_male} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="emp_female" className="form-label">Female Employees</label>
        <input type="number" className="form-control" id="emp_female" name="emp_female" min="0" 
               value={formData.emp_female} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="organization_type" className="form-label">Organization Type</label>
        <select className="form-control" id="organization_type" name="organization_type" 
                value={formData.organization_type} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="proprietorship">Proprietorship</option>
          <option value="private_limited">Private Limited</option>
          <option value="public_limited">Public Limited</option>
          <option value="sastha">Sastha</option>
          <option value="society">Society</option>
        </select>
      </div>
    </div>
  </div>
);

const UdyamForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Personal Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="owner_name" className="form-label">Applicant Name (as per Aadhaar)</label>
        <input type="text" className="form-control" id="owner_name" name="owner_name" 
               value={formData.owner_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="owner_name_pan" className="form-label">Applicant Name (as per PAN)</label>
        <input type="text" className="form-control" id="owner_name_pan" name="owner_name_pan" 
               value={formData.owner_name_pan} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="date" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="date" name="date" 
               value={formData.date} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Gender</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" 
                   value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="female" 
                   value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="other" 
                   value="other" checked={formData.gender === 'other'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="other">Other</label>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="caste" className="form-label">Caste Category</label>
        <select className="form-control" id="caste" name="caste" 
                value={formData.caste} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Do you have a disability?</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="is_handicapped" id="handicap-yes" 
                   value="yes" checked={formData.is_handicapped === 'yes'} onChange={handleChange} required />
            <label className="form-check-label" htmlFor="handicap-yes">Yes</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="is_handicapped" id="handicap-no" 
                   value="no" checked={formData.is_handicapped === 'no'} onChange={handleChange} />
            <label className="form-check-label" htmlFor="handicap-no">No</label>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="aadhaar" className="form-label">Aadhaar Number</label>
        <input type="text" className="form-control" id="aadhaar" name="aadhaar" pattern="\d{12}" 
               maxLength="12" value={formData.aadhaar} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pan" className="form-label">PAN Number</label>
        <input type="text" className="form-control" id="pan" name="pan" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" 
               value={formData.pan} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Contact Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} />
      </div>
    </div>

    <h3 className="section-title mt-4">Business Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="shop_name" className="form-label">Business Name</label>
        <input type="text" className="form-control" id="shop_name" name="shop_name" 
               value={formData.shop_name} onChange={handleChange} required />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="res_address" className="form-label">Business Address</label>
        <textarea className="form-control" id="res_address" name="res_address" rows="3" 
                  value={formData.res_address} onChange={handleChange} required></textarea>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" 
               value={formData.state} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <input type="text" className="form-control" id="district" name="district" 
               value={formData.district} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="taluka" className="form-label">Taluka</label>
        <input type="text" className="form-control" id="taluka" name="taluka" 
               value={formData.taluka} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pincode" className="form-label">PIN Code</label>
        <input type="text" className="form-control" id="pincode" name="pincode" pattern="[0-9]{6}" 
               maxLength="6" value={formData.pincode} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="commencement_date" className="form-label">Date of Commencement</label>
        <input type="date" className="form-control" id="commencement_date" name="commencement_date" 
               value={formData.commencement_date} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="business_type" className="form-label">Nature of Business</label>
        <input type="text" className="form-control" id="business_type" name="business_type" 
               value={formData.business_type} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="annual_turnover" className="form-label">Annual Turnover (₹)</label>
        <input type="number" className="form-control" id="annual_turnover" name="annual_turnover" min="0" 
               step="1000" value={formData.annual_turnover} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="emp_male" className="form-label">Male Employees</label>
        <input type="number" className="form-control" id="emp_male" name="emp_male" min="0" 
               value={formData.emp_male} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="emp_female" className="form-label">Female Employees</label>
        <input type="number" className="form-control" id="emp_female" name="emp_female" min="0" 
               value={formData.emp_female} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="organization_type" className="form-label">Organization Type</label>
        <select className="form-control" id="organization_type" name="organization_type" 
                value={formData.organization_type} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="proprietorship">Proprietorship</option>
          <option value="private_limited">Private Limited</option>
          <option value="public_limited">Public Limited</option>
          <option value="partnership">Partnership</option>
          <option value="llp">LLP</option>
        </select>
      </div>
    </div>

    <h3 className="section-title mt-4">Bank Account Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="bank_name" className="form-label">Bank Name</label>
        <input type="text" className="form-control" id="bank_name" name="bank_name" 
               value={formData.bank_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="account_number" className="form-label">Account Number</label>
        <input type="text" className="form-control" id="account_number" name="account_number" 
               pattern="[0-9]{9,18}" value={formData.account_number} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="ifsc_code" className="form-label">IFSC Code</label>
        <input type="text" className="form-control" id="ifsc_code" name="ifsc_code" 
               pattern="[A-Z]{4}0[A-Z0-9]{6}" value={formData.ifsc_code} onChange={handleChange} required />
      </div>
    </div>
  </div>
);

const GSTForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Personal Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="applicant_name" className="form-label">Applicant Name</label>
        <input type="text" className="form-control" id="applicant_name" name="applicant_name" 
               value={formData.applicant_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="aadhar_no" className="form-label">Aadhaar Number</label>
        <input type="text" className="form-control" id="aadhar_no" name="aadhar_no" pattern="[0-9]{12}" 
               maxLength="12" value={formData.aadhar_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pan_no" className="form-label">PAN Number</label>
        <input type="text" className="form-control" id="pan_no" name="pan_no" 
               pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" value={formData.pan_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile_no" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="dob" name="dob" 
               value={formData.dob} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select className="form-control" id="gender" name="gender" 
                value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

    <h3 className="section-title mt-4">Business Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="business_name" className="form-label">Business Name</label>
        <input type="text" className="form-control" id="business_name" name="business_name" 
               value={formData.business_name} onChange={handleChange} required />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="office_address" className="form-label">Business Address</label>
        <textarea className="form-control" id="office_address" name="office_address" rows="3" 
                  value={formData.office_address} onChange={handleChange} required></textarea>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" 
               value={formData.state} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <input type="text" className="form-control" id="district" name="district" 
               value={formData.district} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pincode" className="form-label">PIN Code</label>
        <input type="text" className="form-control" id="pincode" name="pincode" pattern="[0-9]{6}" 
               maxLength="6" value={formData.pincode} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="nature_of_business" className="form-label">Nature of Business</label>
        <input type="text" className="form-control" id="nature_of_business" name="nature_of_business" 
               value={formData.nature_of_business} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="org_type" className="form-label">Type of Organization</label>
        <select className="form-control" id="org_type" name="org_type" 
                value={formData.org_type} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="proprietor">Proprietor</option>
          <option value="pvt_ltd">Private Limited</option>
          <option value="partnership">Partnership</option>
          <option value="llp">LLP</option>
        </select>
      </div>
    </div>
  </div>
);

const ITRForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Personal Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="applicant_name" className="form-label">Full Name (as per PAN)</label>
        <input type="text" className="form-control" id="applicant_name" name="applicant_name" 
               value={formData.applicant_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pan_no" className="form-label">PAN Number</label>
        <input type="text" className="form-control" id="pan_no" name="pan_no" 
               pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" value={formData.pan_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="aadhar_no" className="form-label">Aadhaar Number</label>
        <input type="text" className="form-control" id="aadhar_no" name="aadhar_no" pattern="[0-9]{12}" 
               maxLength="12" value={formData.aadhar_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile_no" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input type="date" className="form-control" id="dob" name="dob" 
               value={formData.dob} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Financial Year</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="financial_year" className="form-label">Assessment Year</label>
        <select className="form-control" id="financial_year" name="financial_year" 
                value={formData.financial_year} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="2023-24">2023-24</option>
          <option value="2022-23">2022-23</option>
          <option value="2021-22">2021-22</option>
        </select>
      </div>
    </div>

    <h3 className="section-title mt-4">Income Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="income_salary" className="form-label">Salary Income (₹)</label>
        <input type="number" className="form-control" id="income_salary" name="income_salary" min="0" 
               step="1000" value={formData.income_salary} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="income_business" className="form-label">Business Income (₹)</label>
        <input type="number" className="form-control" id="income_business" name="income_business" min="0" 
               step="1000" value={formData.income_business} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="income_house" className="form-label">House Property Income (₹)</label>
        <input type="number" className="form-control" id="income_house" name="income_house" min="0" 
               step="1000" value={formData.income_house} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="income_other" className="form-label">Other Income (₹)</label>
        <input type="number" className="form-control" id="income_other" name="income_other" min="0" 
               step="1000" value={formData.income_other} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="tds_deducted" className="form-label">TDS Deducted (₹)</label>
        <input type="number" className="form-control" id="tds_deducted" name="tds_deducted" min="0" 
               step="1000" value={formData.tds_deducted} onChange={handleChange} />
      </div>
    </div>

    <h3 className="section-title mt-4">Bank Account Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="bank_name" className="form-label">Bank Name</label>
        <input type="text" className="form-control" id="bank_name" name="bank_name" 
               value={formData.bank_name} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="account_number" className="form-label">Account Number</label>
        <input type="text" className="form-control" id="account_number" name="account_number" 
               value={formData.account_number} onChange={handleChange} />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="ifsc_code" className="form-label">IFSC Code</label>
        <input type="text" className="form-control" id="ifsc_code" name="ifsc_code" 
               value={formData.ifsc_code} onChange={handleChange} />
      </div>
    </div>
  </div>
);

const PollutionForm = ({ formData, handleChange, handleFileChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Business Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="business_name" className="form-label">Business/Industry Name</label>
        <input type="text" className="form-control" id="business_name" name="business_name" 
               value={formData.business_name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="owner_name" className="form-label">Owner/Authorized Person Name</label>
        <input type="text" className="form-control" id="owner_name" name="owner_name" 
               value={formData.owner_name} onChange={handleChange} required />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="office_address" className="form-label">Complete Address</label>
        <textarea className="form-control" id="office_address" name="office_address" rows="3" 
                  value={formData.office_address} onChange={handleChange} required></textarea>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="state" className="form-label">State</label>
        <input type="text" className="form-control" id="state" name="state" 
               value={formData.state} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="district" className="form-label">District</label>
        <input type="text" className="form-control" id="district" name="district" 
               value={formData.district} onChange={handleChange} required />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="pincode" className="form-label">PIN Code</label>
        <input type="text" className="form-control" id="pincode" name="pincode" pattern="[0-9]{6}" 
               maxLength="6" value={formData.pincode} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Industry Details</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="industry_type" className="form-label">Type of Industry</label>
        <select className="form-control" id="industry_type" name="industry_type" 
                value={formData.industry_type} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="service">Service</option>
          <option value="construction">Construction</option>
          <option value="mining">Mining</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="pollution_category" className="form-label">Pollution Category</label>
        <select className="form-control" id="pollution_category" name="pollution_category" 
                value={formData.pollution_category} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="white">White</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="total_area" className="form-label">Total Area (sq. ft.)</label>
        <input type="number" className="form-control" id="total_area" name="total_area" min="0" 
               value={formData.total_area} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="water_consumption" className="form-label">Water Consumption (KL/day)</label>
        <input type="number" className="form-control" id="water_consumption" name="water_consumption" min="0" 
               step="0.1" value={formData.water_consumption} onChange={handleChange} required />
      </div>
    </div>

    <h3 className="section-title mt-4">Contact Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="mobile_no" className="form-label">Mobile Number</label>
        <input type="tel" className="form-control" id="mobile_no" name="mobile_no" pattern="[0-9]{10}" 
               maxLength="10" value={formData.mobile_no} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email ID</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} required />
      </div>
    </div>
  </div>
);

const DefaultForm = ({ formData, handleChange }) => (
  <div className="form-section mb-5">
    <h3 className="section-title">Contact Information</h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" name="name" 
               value={formData.name} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" name="email" 
               value={formData.email} onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phone" name="phone" pattern="[0-9]{10}" 
               maxLength="10" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea className="form-control" id="address" name="address" rows="3" 
                  value={formData.address} onChange={handleChange} required></textarea>
      </div>
    </div>
  </div>
);

// Helper functions
function getDocumentsForService(serviceId) {
  const documentMap = {
    "food-license": [
      "Aadhaar Card",
      "PAN Card",
      "Proof of Business Address",
      "Passport Size Photo",
      "Property Proof/Rent Agreement",
      "Food Safety Management Plan"
    ],
    "shop-act-license": [
      "Aadhaar Card",
      "PAN Card",
      "Address Proof",
      "Passport Size Photo",
      "Property Proof/Rent Agreement",
      "Business Proof"
    ],
    "udyam-certificate": [
      "Aadhaar Card",
      "PAN Card",
      "Business Address Proof",
      "Bank Account Details",
      "Business Activity Details"
    ],
    "gst-registration": [
      "PAN Card",
      "Aadhaar Card",
      "Proof of Business Registration",
      "Bank Account Details",
      "Address Proof",
      "Photograph"
    ],
    "itr-filing": [
      "PAN Card",
      "Aadhaar Card",
      "Form 16/16A",
      "Bank Statements",
      "Investment Proofs",
      "Rent Receipts (if applicable)"
    ],
    "pollution-certificate": [
      "Aadhaar Card",
      "PAN Card",
      "Factory License",
      "Site Plan",
      "Water Bill",
      "Consent to Operate"
    ]
  };

  return documentMap[serviceId] || [
    "ID Proof",
    "Address Proof",
    "Business Proof",
    "Other Relevant Documents"
  ];
}

function getServicePrice(serviceId) {
  const priceMap = {
    "food-license": 1999,
    "shop-act-license": 1499,
    "udyam-certificate": 999,
    "gst-registration": 2499,
    "itr-filing": 2999,
    "pollution-certificate": 3499
  };

  return priceMap[serviceId] || 1499;
}

export default BookingPage;