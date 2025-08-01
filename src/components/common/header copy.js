import React, { useState } from 'react';
import animationlogo from '../../images/animatedlogo.gif';
import { NavLink } from 'react-router-dom';  // Change Link to NavLink
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For JS functionality (hamburger)
// import PopupForm1 from '../common/PopupForm';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <section id="header">
            <nav className="navbar navbar-expand-xl bg-body-tertiary">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img className='animatedlogo' src={animationlogo} alt="Brand Logo" />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    // exact
                                    className="nav-link"
                                // activeClassName="active-link"  // This will add the class "active-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about-us"
                                    className="nav-link"
                                // activeClassName="active-link"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/services"
                                    className="nav-link"
                                // activeClassName="active-link"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/our-process"
                                    className="nav-link"
                                // activeClassName="active-link"
                                >
                                    Our Process
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/portfolio"
                                    className="nav-link"
                                // activeClassName="active-link"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact-us"
                                    className="nav-link"
                                // activeClassName="active-link"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>

                        {/* Right-aligned button */}
                        <NavLink to='/contact-us'>
                            <button onClick={openModal} className="header-btn" style={{ cursor: 'pointer' }}>
                                Get a Quote
                            </button>
                        </NavLink>

                        {/* <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} /> */}
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;
