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
                <title>Terms & Conditions - Animation Rush</title>
                <meta name="description" content="Review the Terms and Conditions of Animation Rush. Understand your rights, our policies, and guidelines for a transparent collaboration." />
                <link rel="canonical" href="https://animationrush.com/terms-conditions" />
            </Helmet>
            <StepSection/>
            <Footer/>
        </div>
    );
};

export default OurProcess;
