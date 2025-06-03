// src/AnimatedBanner.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../../AnimatedBanner.css';

const AnimatedBanner = () => {
  const [email, setEmail] = useState('');
  const [downloadPDF, setDownloadPDF] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const characterRef = useRef(null);
  
  useEffect(() => {
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => {
      if (characterRef.current) {
        characterRef.current.style.transform = 'translateX(0)';
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setSubmitted(true);
    
    // In a real app, you would send the data to your backend here
    console.log('Form submitted:', { email, downloadPDF });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setDownloadPDF(false);
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="banner-container">
      <div className="banner-header">
        <h1>
          <i className="fas fa-lightbulb"></i> BRAND NEW IDEAS TO INSPIRE YOU
        </h1>
      </div>
      
      <div className="banner-content">
        <div className="character-container">
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
          
          <div className="character" ref={characterRef}>
            <div className="character-inner">
              <div className="character-body"></div>
              <div className="character-head">
                <div className="character-face">
                  <div className="character-eye"></div>
                  <div className="character-eye"></div>
                  <div className="character-smile"></div>
                </div>
              </div>
              <div className="character-arm character-arm-left">
                <div className="character-hand">
                  <div className="character-form-paper">
                    <div className="paper-line"></div>
                    <div className="paper-line"></div>
                    <div className="paper-line"></div>
                  </div>
                </div>
              </div>
              <div className="character-arm character-arm-right"></div>
              <div className="character-leg"></div>
              <div className="character-leg"></div>
            </div>
          </div>
        </div>
        
        <div className="form-container">
          <h2 className="form-title">Catalog Download</h2>
          <p className="form-description">
            Fill out the following form to download the catalog with our brand new ideas to inspire you.
          </p>
          
          <form onSubmit={handleSubmit} className={`catalog-form ${submitted ? 'submitted' : ''}`}>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                placeholder="ex.yourname@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="pdf-format"
                checked={downloadPDF}
                onChange={(e) => setDownloadPDF(e.target.checked)}
              />
              <label htmlFor="pdf-format">Download in PDF format</label>
            </div>
            
            <button type="submit" className="download-btn">
              {submitted ? (
                <><i className="fas fa-check"></i> THANK YOU!</>
              ) : (
                <><i className="fas fa-download"></i> DOWNLOAD CATALOG</>
              )}
            </button>
          </form>
          
          <div className="powered-by">
            Powered by Visser Form
          </div>
        </div>
      </div>
      
      <div className="footer">
        WWW.YOURCOMPANY.COM
      </div>
    </div>
  );
};

export default AnimatedBanner;