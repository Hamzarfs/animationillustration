import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/common/HeroSection';
import heroBgImg from '../images/aboutusbanner.png'

const Contactus = () => {
    const heroSection = {
        title: 'Contact Us',
        image: heroBgImg,
        subtitle: 'Get in touch with Animation Rush to learn more about our offers or ask any questions. We are here for you'
    }
    return (
        <div>
            <Header/>
            <Helmet>
                <title>Feel Free To Contact Us | Animation Rush</title>
                <meta name="description" content="Get in touch with Animation Rush to learn more about our offers or ask any questions. We're here for you!" />
                <link rel="canonical" href="https://animationrush.com/contact-us" />
            </Helmet>
            <HeroSection 
            {...heroSection} />
            <ContactUsform/>
            <Footer/>
        </div>
    );
};

export default Contactus;
