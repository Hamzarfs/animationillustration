import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home';
import About from './pages/AboutUs';
import ServicesPage from './pages/Services';
import { HelmetProvider } from 'react-helmet-async';


import Contactus from './pages/ContactUs';

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact-us" element={<Contactus />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};

export default App;
