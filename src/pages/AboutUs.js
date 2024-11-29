import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Header/>
            <Helmet>
                <title>About Us | Animation Rush</title>
                <meta name="description" content="Explore Animation Rush—our mission, vision, and the creative team driving our innovative digital solutions. Learn about our story on our About Us page." />
                <link rel="canonical" href="https://animationrush.com/about-us" />
            </Helmet>
            <ContactUsform/>
            <Footer/>
        </div>
    );
};

export default About;
