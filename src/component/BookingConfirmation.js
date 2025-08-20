import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId } = location.state || {};

  const serviceTitles = {
    "food-license": "Food License",
    "shop-act-license": "Shop Act License",
    "udyam-certificate": "Udyam Certificate",
    "gst-registration": "GST Registration",
    "itr-filing": "ITR Filing",
    "pollution-certificate": "Pollution Certificate"
  };

  return (
    <div className="booking-confirmation">
      <Helmet>
        <title>Booking Confirmed | VMT-TECH</title>
      </Helmet>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="confirmation-icon mb-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "5rem" }}></i>
              </div>
              <h1 className="mb-3">Booking Confirmed!</h1>
              <p className="lead mb-4">
                Thank you for booking our {serviceTitles[serviceId] || 'service'}.
                Our executive will contact you shortly to proceed with your application.
              </p>
              
              <div className="confirmation-details mb-5 p-4 bg-light rounded">
                <h4 className="mb-3">Next Steps</h4>
                <ol className="text-start">
                  <li className="mb-2">Our team will contact you within 1 business day</li>
                  <li className="mb-2">You'll receive a document checklist via email</li>
                  <li className="mb-2">Submit your documents securely through our portal</li>
                  <li>Track your application status in real-time</li>
                </ol>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button 
                  className="btn btn-primary"
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </button>
                <button 
                  className="btn btn-outline-secondary"
                  onClick={() => navigate(`/services/${serviceId}`)}
                >
                  View Service Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingConfirmation;