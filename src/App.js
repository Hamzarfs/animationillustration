import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home';
import About from './pages/AboutUs';
import ServicesPage from './pages/Services';
import { HelmetProvider } from 'react-helmet-async';
import OurProcess from './pages/OurProcess';
import Contactus from './pages/ContactUs';
import TermsConditions from './pages/Termscondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ThankYou from './pages/Thankyou';
import Portfolio from './pages/Portfolio';

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/our-process" element={<OurProcess />} />
                    <Route path="/contact-us" element={<Contactus />} />
                    <Route path="/terms-conditions" element={<TermsConditions />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
