import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
    return (
        <div>
            <Header/>
            <Helmet>
                <title>Our Portfolio: Stunning Video Animations That Inspire</title>
                <meta name="description" content="Explore our portfolio of video animations. See how we bring ideas to life with creative visuals, engaging storytelling, and top-notch quality." />
                <link rel="canonical" href="https://animationrush.com/portfolio" />
            </Helmet>
            <ContactUsform/>
            <Footer/>
        </div>
    );
};

export default Portfolio;
