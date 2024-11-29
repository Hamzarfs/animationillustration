import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

import Header from '../components/common/header';
import '../App.css'
import BannerSection from '../components/common/banner';
import bannerImage from '../images/IllustrationBanner.webp';
import whyservice1 from '../images/whyservice1.png';
import whyservice2 from '../images/whyservice2.png';
import whyservice3 from '../images/whyservice3.png';
import whyservice4 from '../images/whyservice4.png';
import whyservice5 from '../images/whyservice5.png';
import whyservice6 from '../images/whyservice6.png';
import imageanimation from '../images/uniqueanimation.gif';
import Banner from '../components/common/banner';
import SecondFormSec from '../components/Home/Secondformsection';
import AwardsLogo from '../components/common/awardslogo';
import WhyChooseService from '../components/Home/whychooseservice';
import CtaSection from '../components/common/ctasection';
import ImageRightBanner from '../components/common/ImageRightbanner';

import PortfolioGallery from '../components/Home/homeportfolio';

const Home = () => {
    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)
    const heading = {

        title: (
            <>
                Why Choose Our
            </>

        ),

        highlight: "Logo Animation",
        title2: " Services"


    };
    const description = "Our team of highly qualified and creative animators excel in producing meticulously crafted logo animations. After studying your brand, we produce creative animated logos to tell your brand story and make it memorable.";
    const steps = [
        {
            image: whyservice1,
            alt: "Improve Branding",
            title: "Improve Branding",
            description: "Our expert animators will bring yourstatic logo to life, creating a dynamic and memorable visual identity that leaves a lasting impression."
        },
        {
            image: whyservice2,
            alt: "Increase Engagement",
            title: "Increase Engagement",
            description: "Animated logos are more attention- grabbing and engaging, increasing brand recognition and driving customer interaction."
        },
        {
            image: whyservice3,
            alt: "Communicate Messaging",
            title: "Communicate Messaging",
            description: "We work closely with you to understand your brand's unique narrative, ensuring that your logo animation aligns perfectly with your brand's values and message."
        },
        {
            image: whyservice4,
            alt: "Multi-Platform Use",
            title: "Multi-Platform Use",
            description: "Our animations are designed to grab attention on various digital platforms, from websites to social media and more."
        },
        {
            image: whyservice5,
            alt: "Guaranteed Quality & Delivery",
            title: "Guaranteed Quality &Delivery",
            description: "With our experienced team and state-of-the-art technology, we deliverhigh-quality logo animations on time and within budget."
        },
        {
            image: whyservice6,
            alt: "Creative Logo Animation",
            title: "Creative Logo Animation",
            description: "We pay attention to every detail,ensuring that your logo animation is a reflection of your brand's personalityand style."
        }
    ];
    return (
        <div>
            <Header />
            <Banner
                subheading="Best Illustration Services"
                heroTitle="Share Your Brand's Story With Memorable Animated Illustrations"
                description="We offer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated logos for their startups."
                buttonText="Contact Us Today!"
                buttonLink="/contact" // Replace with your actual link
                backgroundImage={bannerImage} // Provide the background image URL
            />
            <SecondFormSec />
            <AwardsLogo />
            <WhyChooseService
                heading={heading}
                description={description}
                steps={steps}
            />
            <CtaSection />
            <ImageRightBanner
                // subHeading="ABOUT US"
                heading="What Makes Our"
                headinglightblue=" Animations"
                heading2=" Unique"

                description={
                    <>
                        Let creativity meet strategy! We turn your online vision into reality! With a focus on innovative strategies and cutting-edge technologies, our passionate team is committed to driving results and ensuring your success in the ever-evolving digital landscape.

                    </>
                }
                imageSrc={imageanimation}
                objectfit="contain"
                imageHeight="500px"  // Set height here
                imageWidth="100%"     // Set width here
                borderRadius="30px"
                reverseOrder={false}
                updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/" 
            />
            <PortfolioGallery />


        </div>
    );
};

export default Home;
