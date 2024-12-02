import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
import StepSection from '../components/common/Steps';
import { Helmet } from 'react-helmet-async';
import FAQSection from '../components/common/faqsection';
import faqimg from '../images/faqimg.gif';
import heroBgImg from '../images/OurProces.webp'
import HeroSection from '../components/common/HeroSection';

const OurProcess = () => {


    const faqs = [
        {
          question: "What is the process of producing a video?",
          answer: "Our video production process consists of a few steps: consulting, pre-production, production, post-production, and devising."
        },
        {
          question: "How long should my video be?",
          answer: "The ideal length of your video depends on your purpose and intended audience. Shorter videos are preferred for social media, while longer videos develop organically over time with the material's theme."
        },
        {
          question: "What is the cost of an explainer video?",
          answer: "The cost of creating an explainer video depends on the duration, complexity, type of animation applied, and total time spent on it."
        },
        {
          question: "So how many rounds of revisions do I get?",
          answer: "Every package includes different rounds of revisions. However, our company strives to provide you with a completely satisfying product."
        },
        {
          question: "Why consider Animation Rush as your video animation company?",
          answer: "Animation Rush is a one-stop shop for all kinds of video animation work. It has a team of the best and most brilliant artists and animators to do the magic."
        }
      ];
      const heroSection = {
        title: 'Our Process',
        image: heroBgImg,
        subtitle: 'From concept to final animation, we ensure every step is executed with precision and care.'
    }
    
    return (
        <div>
            <Header/>
            <Helmet>
                <title>Our Process | Animation Rush</title>
                <meta name="description" content="Learn how we create amazing video animations! From brainstorming ideas to final delivery, our process ensures top visuals tailored just for you." />
                <link rel="canonical" href="https://animationrush.com/our-process" />
            </Helmet>
            <HeroSection 
            {...heroSection} />
            <StepSection/>
            <FAQSection faqs={faqs} image={faqimg} />
            <Footer/>
        </div>
    );
};

export default OurProcess;
