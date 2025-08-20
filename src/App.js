import React from "react";
import "./App.css";
import "./i18n";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import HomePage from "./component/Homepage";
import ServiceDetailPage from "./component/ServiceDetailPage";
import BookingPage from "./component/BookingPage";
import BookingConfirmation from "./component/BookingConfirmation";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/book/:serviceId" element={<BookingPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;