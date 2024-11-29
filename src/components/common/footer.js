import React from 'react';
import footer from '../../images/whitelogo.png'; // Ensure the image path is correct
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#215E89' }}>
      <div className="container">
        <div className="row">
          
          {/* About Section with Logo */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading-sub">
            <Link to="/"> <img src={footer} alt="Web Design Mania Logo" style={{ maxWidth: '150px'}} /></Link>
            </h5>
            <p className="text-light">
              As a versatile, full-service agency specializing in website design and development, we create visually striking and cost-effective solutions for businesses of every scale.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact-us" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links list-unstyled">
              <li> <a href="/logo-design" className="text-light text-decoration-none">Logo Design</a></li>
              <li> <a href="/" className="text-light text-decoration-none">Website Design</a></li>
              <li> <a href="/app-design" className="text-light text-decoration-none">App Design</a></li>
              <li> <a href="/stationery" className="text-light text-decoration-none">Stationery</a></li>
              <li> <a href="/seo" className="text-light text-decoration-none">SEO</a></li>
              <li> <a href="/smm" className="text-light text-decoration-none">SMM</a></li>
            </ul>
          </div>

          {/* Follow Us and Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="https://www.facebook.com/webdesignmaniaUS" className="text-light"><FaFacebookF size={25} /></a>
              <a href="https://www.instagram.com/webdesignmania_us/" className="text-light"><FaInstagram size={25} /></a>
              <a href="https://www.linkedin.com/company/web-design-mania-us/" className="text-light"><FaLinkedinIn size={25} /></a>
            </div>

            {/* Contact Us Section */}
            <div className="contact-details p-3" style={{ border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '8px' }}>
              <h4 className="footer-heading">Contact Us</h4>
              <p className="mb-1 text-light">
                <FaPhoneAlt /> 
                <a href="tel:+15515543283" className="text-light text-decoration-none">  +1 (551) 554-3283</a>
              </p>
              <p className="mb-1 text-light">
                <FaEnvelope /> 
                <a href="mailto:info@webdesignmania.com" className="text-light text-decoration-none"> info@webdesignmania.com</a>
              </p>
              <p className="text-light">
                <FaMapMarkerAlt /> 
                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> 43 3rd Ave 2nd Floor, Edison, NJ 08837</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section with two columns */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-6 text-start">
              <p className="text-light">© Copyright 2024, <strong>Animation Rush</strong>. Powered by RFS</p>
            </div>
            {/* Right Column */}
            <div className="col-6 text-end">
              <a href="/terms-conditions" className="text-light text-decoration-none">Terms & conditions</a> |   
              <a href="/privacy-policy" className="text-light text-decoration-none"> Privacy Policy</a>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
