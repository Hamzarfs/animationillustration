import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ContactUsform from '../components/Contactus/contactus';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import ImageRightBanner from '../components/common/ImageRightbanner';
import aboutus1 from '../images/aboutus2.gif';
import aboutus2 from '../images/missionvision.gif';
import aboutus3 from '../images/aboutus3.png';
import ImageLeftTab from '../Aboutus/Imagelefttabs';
import CtaSection from '../components/common/ctasection';
import FAQSection from '../components/common/faqsection';
import faqimg from '../images/faqimg.gif';
import CustomServices from '../components/Home/customservice';
import appvalues1 from '../images/Appvalues1.png';
import appvalues2 from '../images/Appvalues2.png';
import appvalues3 from '../images/Appvalues3.png';
import appvalues4 from '../images/Appvalues4.png';
>>>>>>> hamza

const About = () => {


    
    const customserviceheading = {

        customservicetitle: "Custom Service",
        customservicehighlight: "Logo Animation",
        customservicetitle2: " Services"


    };
    const customservicedescription = "Our team of highly qualified and creative animators excel in producing meticulously crafted logo animations. After studying your brand, we produce creative animated logos to tell your brand story and make it memorable.";
    const customservicesteps = [
        {
            customserviceimage: appvalues1,
            alt: "Improve Branding",
            // customservicetitle: "Improve Branding",
            // customservicedescription: "Our expert animators will bring yourstatic logo to life, creating a dynamic and memorable visual identity that leaves a lasting impression."
        },
        {
            customserviceimage: appvalues2,
            alt: "Increase Engagement",
            // customservicetitle: "Increase Engagement",
            // customservicedescription: "Animated logos are more attention- grabbing and engaging, increasing brand recognition and driving customer interaction."
        },
        {
            customserviceimage: appvalues3,
            alt: "Communicate Messaging",
            // customservicetitle: "Communicate Messaging",
            // customservicedescription: "We work closely with you to understand your brand's unique narrative, ensuring that your logo animation aligns perfectly with your brand's values and message."
        },
        {
            customserviceimage: appvalues4,
            alt: "Multi-Platform Use",
            // customservicetitle: "Multi-Platform Use",
            // customservicedescription: "Our animations are designed to grab attention on various digital platforms, from websites to social media and more."
        }
    ];


    const faqs = [
        {
            question: "Can Logo Animation Help Boost My Brand Identity?",
            answer: "Yes, logo animation can..."
        },
        {
            question: "What is the average cost of a logo animation?",
            answer: "The average cost varies..."
        }
        ,
        {
            question: "Who will own the right to my logo animation?",
            answer: "You will retain full rights..."
        },
        {
            question: "How long does it take to create an animated logo?",
            answer: "It usually takes..."
        },
        {
            question: "Can I request a revision?",
            answer: "Yes, revisions are allowed lorem..ffer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated logffer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated logffer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated logffer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated logffer high-quality custom logo animation services for businesses of all sizes. Our team specializes in helping organizations create impactful animated log."
        }
    ];
    return (
        <div>
            <Header/>
<<<<<<< HEAD
            <Helmet>
                <title>About Us | Animation Rush</title>
                <meta name="description" content="Explore Animation Rush—our mission, vision, and the creative team driving our innovative digital solutions. Learn about our story on our About Us page." />
                <link rel="canonical" href="https://animationrush.com/about-us" />
            </Helmet>
            <ContactUsform/>
            <Footer/>
=======
            <ImageRightBanner
                // subHeading="ABOUT US"
                heading="Innovative App"
                headinglightblue=" Solutions"
                heading2=" Crafted for Your Success"
                description={
                    <>
                        Let creativity meet strategy! We turn your online vision into reality! With a focus on innovative strategies and cutting-edge technologies, our passionate team is committed to driving results and ensuring your success in the ever-evolving digital landscape.

                    </>
                }
                imageSrc={aboutus1}
                objectfit="contain"
                imageHeight="500px"  // Set height here
                imageWidth="450px"     // Set width here
                borderRadius="10px"
                reverseOrder={false}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />
            <ImageLeftTab
            imageleft={aboutus2}
            />
            <CustomServices
                customserviceheading={customserviceheading}
                customservicedescription={customservicedescription}
                customservicesteps={customservicesteps} />
            <CtaSection/>

<ImageRightBanner
                // subHeading="ABOUT US"
                heading="Innovative App"
                headinglightblue=" Solutions"
                heading2=" Crafted for Your Success"
                description={
                    <>
                        Let creativity meet strategy! We turn your online vision into reality! With a focus on innovative strategies and cutting-edge technologies, our passionate team is committed to driving results and ensuring your success in the ever-evolving digital landscape.

                    </>
                }
                imageSrc={aboutus3}
                objectfit="contain"
                imageHeight="500px"  // Set height here
              
                borderRadius="10px"
                reverseOrder={true}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />
 <FAQSection faqs={faqs} image={faqimg} />
                    <Footer/>
>>>>>>> hamza
        </div>
    );
};

export default About;
