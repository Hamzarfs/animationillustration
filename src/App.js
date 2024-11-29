import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './pages/Home';
import About from './pages/AboutUs';
import ServicesPage from './pages/Services';
import OurProcess from './pages/OurProcess';
import Contactus from './pages/ContactUs';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/our-process" element={<OurProcess />} />
                <Route path="/contact-us" element={<Contactus />} />
            </Routes>
        </Router>
    );
};

export default App;
