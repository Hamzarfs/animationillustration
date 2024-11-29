import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
import Header from '../components/common/header';
import '../App.css'
import BannerSection from '../components/common/banner';
import bannerImage from '../images/IllustrationBanner.webp';
import whyservice1 from '../images/whyservice1.gif';
import whyservice2 from '../images/whyservice2.gif';
import whyservice3 from '../images/whyservice3.gif';
import whyservice4 from '../images/whyservice4.gif';
import whyservice5 from '../images/whyservice5.gif';
import whyservice6 from '../images/whyservice6.gif';
import customserviceimage1 from '../images/customservice1.gif';
import customserviceimage2 from '../images/customservice2.gif';
import customserviceimage3 from '../images/customservice3.gif';
import customserviceimage4 from '../images/customservice4.png';
import faqimg from '../images/faqimg.gif';
import imageanimation from '../images/portfolio3.gif';
import Banner from '../components/common/banner';
import SecondFormSec from '../components/Home/Secondformsection';
import AwardsLogo from '../components/common/awardslogo';
import WhyChooseService from '../components/Home/whychooseservice';
import CtaSection from '../components/common/ctasection';
import ImageRightBanner from '../components/common/ImageRightbanner';

import PortfolioGallery from '../components/Home/homeportfolio';
import CustomServices from '../components/Home/customservice';
import TrackRecord from '../components/Home/trackrecord';
import CommitmentClient from '../components/Home/Commitment';
import FAQSection from '../components/common/faqsection';
import Footer from '../components/common/footer';
import { Helmet } from 'react-helmet-async';


const Home = () => {


    const customserviceheading = {

        customservicetitle: "Our Professional ",
        customservicehighlight: "Video Production",
        customservicetitle2: " Services"


    };
    const customservicedescription = "As a premium video production company, we offer a wide range of services, including";
    const customservicesteps = [
        {
        customserviceimage: customserviceimage1,
        alt: "Logo Animation",
        customservicetitle: "Logo Animation",
        customservicedescription: "Get clients with our logo animations. Our powerfully creative and unique animations will turn your logo into eye candy. "
      },
        {
            customserviceimage: customserviceimage2,
            alt: "2D Animation",
            customservicetitle: "2D Animation",
            customservicedescription: "Translate your imagination into amazing 2D animations. Character animations and background designs are crafted for you by expert artists, providing you with rich visual and engaging content."
        },
        {
            customserviceimage: customserviceimage3,
            alt: "3D Animation",
            customservicetitle: "3D Animation",
            customservicedescription: "Bring lifelike 3D animations that enthrall your audience. From product visualization to cinematic sequences, our expert team does everything."
        },
        {
            customserviceimage: customserviceimage4,
            alt: "Explainer Video",
            customservicetitle: "Explainer Video",
            customservicedescription: "Make your cumbersome concepts easy with our great explainer videos using simple and easy-to-understand visuals with short stories to clarify and educate your audience."
        }
  
    ];
    const heading = {
        title: (
            <>   
            Industries We Excel In  
            </>
        ),
        // highlight:"Animation Video",
        // title2: "Production Company in the USA"
    };
    const description = "Our team of highly qualified and creative animators excel in producing meticulously crafted logo animations. After studying your brand, we produce creative animated logos to tell your brand story and make it memorable.";
    const steps = [
        {
            image: whyservice1,
            alt: "Entertainment",
            title: "Entertainment",
            description: "Our animation studio specializes in creating outstanding visual effects, character animations, and motion graphics in film and television. We produce interactive gaming experiences with 3D and other animation options."
        },
        {
            image: whyservice2,
            alt: "Commercial",
            title: "Commercial",
            description: "Our studio is engaged in the production of captivating commercials, explainer videos, or corporate videos that help brands and businesses communicate well."
        },
        {
            image: whyservice3,
            alt: "Nonprofit",
            title: "Nonprofit",
            description: "We create powerful animations to amplify the voices of nonprofits and social causes. Using very strong imagery and engaging storytelling, we create videos that succeed in grabbing audience attention."
        },
        {
            image: whyservice4,
            alt: "Healthcare",
            title: "Healthcare",
            description: "The studio helps create clear and informative medical animations to educate healthcare professional and patients, in addition to developing interactive animations around pharmaceutical concepts."
        },
        {
            image: whyservice5,
            alt: "Educational",
            title: "Educational",
            description: "In creating e-learning materials, we specialize in interactive animations and simulations that animate difficult subjects, thus appealing to their visual sense. "
        },
        {
            image: whyservice6,
            alt: "Sports",
            title: "Sports",
            description: "The studio creates vibrant graphics and animations for sports broadcasts as well as interesting videos promoting sports events and athletes."
        }
    ];<Helmet>
    <title>Video Production Company In USA | Animation Rush</title>
    <meta name="description" content="We're a creative video production company specializing in animated explainers, demo videos, product showcases, and other innovative video content." />
    <link rel="canonical" href="http://theappdesign.com" />
</Helmet>


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
    
    return (
        <div>
            <Header />
            <Helmet>
                <title>Video Production Company In USA | Animation Rush</title>
                <meta name="description" content="We're a creative video production company specializing in animated explainers, demo videos, product showcases, and other innovative video content." />
                <link rel="canonical" href="https://animationrush.com" />
            </Helmet>


            <Banner
                subheading="Bringing Your Ideas to Life with Expertise and Creativity"
                heroTitle="Professional Video Production Company Your Vision, Our Expertise"
                description="As a creative video production company, we shape bright and beautiful developing videos. Our team of exemplary professionals will bring your ideas from concept to completion. Whether commercial, explanatory, or brand-film cinematic, we got it for you."
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
                heading="What Sets Us Apart"
                // headinglightblue=" Animations"
                // heading2=" Unique"
                description={
                    <>
                        We are a top creative video production company that believes in combining traditional innovative storytelling with the latest technology. The experience has made our staff realize that the client's vision should always come first above anything. We create masterpieces or tell wonderful stories while still using the newest tools and techniques by achieving moving pictures that will literally go beyond your viewers. 
 <br></br> <br></br>
Including optimization and maximizing reach is what our videos can do for your audience. Designing brand new types of engaging media, audio, and creative content for social media sites, websites, email marketing, and digital advertising will connect you with your audience and produce results.

                    </>
                }
                imageSrc={imageanimation}
                objectfit="contain"
                imageHeight="500px"  // Set height here
                imageWidth="450px"     // Set width here
                borderRadius="10px"
                reverseOrder={false}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />
            <PortfolioGallery />

            <CustomServices
                customserviceheading={customserviceheading}
                customservicedescription={customservicedescription}
                customservicesteps={customservicesteps} />
            <TrackRecord />
            <CommitmentClient />
            <FAQSection faqs={faqs} image={faqimg} />
            <Footer />

        </div>
    );
};

export default Home;
