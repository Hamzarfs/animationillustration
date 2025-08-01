import React, { useState } from 'react';
import animationlogo from '../../images/animatedlogo.gif';
import { NavLink } from 'react-router-dom';  // Change Link to NavLink
import PopupForm from './PopupForm';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                                    className="nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about-us"
                                    className="nav-link"
                                >
                                    About Us
                                </NavLink>
                            </li>
                              <li className="nav-item">
                                <NavLink
                                    to="/services"
                                    className="nav-link"
                                >
                                    Services
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavDropdown
                                    title={
                                        <NavLink
                                            to="/services"
                                            className="nav-link"
                                            style={{ display: 'inline' }}
                                        >
                                            Services
                                        </NavLink>
                                    }
                                    id="basic-nav-dropdown"
                                    show={isOpen}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    <NavDropdown.Item as={NavLink} to="/2d-animation-services">
                                        2D Animation Services
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/3d-animation-services">
                                        3D Animation Services
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/services/video-editing">
                                        Video Editing
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li> */}
                            <li className="nav-item">
                                <NavLink
                                    to="/our-process"
                                    className="nav-link"
                                >
                                    Our Process
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/portfolio"
                                    className="nav-link"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact-us"
                                    className="nav-link"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>

                        {/* Right-aligned button */}
                        <button data-bs-toggle='modal' data-bs-target="#popupForm" className="header-btn" style={{ cursor: 'pointer' }}>
                            Get a Quote
                        </button>
                    </div>
                </div>
            </nav>

            <PopupForm />
        </section>
    );
};

export default Header;
