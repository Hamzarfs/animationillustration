import React from 'react';
import { Link } from 'react-router-dom';
import '../Thankyou.css'
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Helmet } from 'react-helmet-async';

const ThankYou = () => {
    return (
        <div>
            <Helmet>
                <title>Thank you | Animation Rush </title>
                <meta name="description" content="Thank you for submitting the form! We’ve received your information and will get back to you shortly. If you have any questions, feel free to reach out. Stay tuned for further updates!" />
                <link rel="canonical" href="https://animationrush.com/thank-you" />
            </Helmet>
            <Header />
            <div className="thankyou-page">
                {/* <img src={ebooklogo} alt="Mobile Logo" /> */}
                <h1>Thank You!</h1>
            </div>
            <div className="contact">
                <h2>Please check your email for further instructions.</h2>
                <p>
                    Your brief has been successfully received. We’ve received it and one
                    of our representatives will be in touch soon to discuss it further and
                    guide you through the next steps.
                </p>
                <p>
                    Having trouble? <a href="tel:+02045112054">Contact us</a>
                </p>
                <a className="banner-cta-button" href="/">
                    Back to homepage
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default ThankYou;
