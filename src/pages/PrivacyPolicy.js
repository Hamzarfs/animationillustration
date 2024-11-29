import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
import StepSection from '../components/common/Steps';
import { Helmet } from 'react-helmet-async';

const OurProcess = () => {
    return (
        <div>
            <Header/>
            <Helmet>
                <title>Privacy Policy - Animation Rush</title>
                <meta name="description" content="Explore Animation Rush's Privacy Policy to understand how we collect, use, and protect your data. Learn more about our practices today." />
                <link rel="canonical" href="https://animationrush.com/privacy-policy" />
            </Helmet>

            <StepSection/>
            <Footer/>
        </div>
    );
};

export default OurProcess;
