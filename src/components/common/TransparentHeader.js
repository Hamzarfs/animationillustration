import React, { useState } from 'react';
import animationlogo from '../../images/whitelogo.png';
import { NavLink } from 'react-router-dom';
import PopupForm from './PopupForm';
import "../../transparentheader.css";

const TransparentHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="transparentheader">
      <nav className="transparentheader-navbar navbar navbar-expand-xl">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img className="transparentheader-logo" src={animationlogo} alt="Brand Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#transparentNavbar"
            aria-controls="transparentNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="transparentNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/our-process" className="nav-link">Our Process</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>

            <button data-bs-toggle='modal' data-bs-target="#popupForm" className="transparentheader-btn">
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      <PopupForm />
    </section>
  );
};

export default TransparentHeader;
