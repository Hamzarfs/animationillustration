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
                <title>Our Process | Animation Rush</title>
                <meta name="description" content="Learn how we create amazing video animations! From brainstorming ideas to final delivery, our process ensures top visuals tailored just for you." />
                <link rel="canonical" href="https://animationrush.com/our-process" />
            </Helmet>
            <StepSection/>
            <Footer/>
        </div>
    );
};

export default OurProcess;
