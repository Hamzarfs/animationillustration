import React from 'react';
import '../../banner.css'; // Unique CSS for banner section
import 'animate.css'; // External library for animations
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Banner = ({ subheading, heroTitle, description, buttonText, buttonLink, backgroundImage }) => {
    // Inline styles for dynamically setting the background image
    const bannerStyles = {

        backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // animation: 'zoomInBackground 15s ease-in-out infinite',
    };

    return (
        <section className="banner" style={bannerStyles}>
            <div className="banner-overlay"></div>
            <div className="banner-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <div className="banner-content">
                                <p className="banner-subheading">{subheading}</p>
                                <h1 className="banner-hero-title animate__animated animate__fadeInUp">
                                    {heroTitle}
                                </h1>
                                <p className="banner-description">{description}</p>
                                <button
                                    data-bs-toggle='modal'
                                    data-bs-target='#popupForm'
                                    className="banner-cta-button "
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
