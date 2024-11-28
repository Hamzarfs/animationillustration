import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contactus from './pages/ContactUs';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<Contactus />} />
            </Routes>
        </Router>
    );
};

export default App;
