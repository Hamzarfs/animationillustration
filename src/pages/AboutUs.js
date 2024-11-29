import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';

const About = () => {
    return (
        <div>
            <Header/>
            <ContactUsform/>
            <Footer/>
        </div>
    );
};

export default About;
