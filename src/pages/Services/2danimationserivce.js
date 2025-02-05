import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import ContactUsform from '../../components/Contactus/contactus';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/common/HeroSection';
import heroBgImg from '../../images/contacus.webp'
import Twodanimation1 from '../../images/2danimationservices1.svg'
import Twodanimation2 from '../../images/2danimationservices2.svg'
import Twodanimation3 from '../../images/2danimationservices3.svg'
import Twodanimation4 from '../../images/2danimationservices4.svg'
import Twodanimation5 from '../../images/2danimationservices5.svg'
import Twodanimation6 from '../../images/2danimationservices6.svg'
import ServiceSec from '../../components/common/servicesecbox';
import ImageRightBanner from '../../components/common/ImageRightbanner';
import webserviceimg1 from '../../images/webimg2.webp';
import ServiceIndustriesSec from '../../components/common/ServiceIndustriesSec';

const twodaydanimation = () => {
    const heroSection = {
        title: '2D Animation Services',
        image: heroBgImg,
        subtitle: 'Looking for high-quality 2D animation services that attract, engage, and convert? We specialize in creating visually stunning animations made for businesses, brands, and content creators.'
    }
    const industriesData = [
        {
          title: "Healthcare",
          description: "Simplify complex medical concepts with clear and engaging animations. Visualize procedures and products for patients and professionals."
        },
        {
          title: "Education",
          description: "Enhance learning experiences with interactive and visually rich animations that make education engaging and effective."
        },
        {
          title: "Retail & Fashion",
          description: (
            <>
            Showcase your products with dynamic animations that drive sales and boost brand visibility.
            <br></br>
            <br></br>
            </>
          )
        },
        {
          title: "Non-Profit",
          description: "Share your mission with powerful, emotionally engaging storytelling that inspires action."
        },
        {
          title: "Entertainment",
          description: "Capture imaginations with vibrant and dynamic animations for all ages, suitable for movies, shows, and online content."
        },
        {
          title: "Technology",
          description: "Bring tech innovations to life with animations that demonstrate functionality and features."
        }
      ];

    const servicesData = [
        {
          image: Twodanimation1,
          title: "Animated Explainer Videos",
          description: "Breakdown complex processes and concepts in an easy to understand medium using 2D explainer Video Animations."
        },
        {
          image: Twodanimation2,
          title: "Whiteboard Animations",
          description: "Present your brand story and increase your social media reach using engaging, high-quality hand-drawn illustrations."
        },
        {
          image: Twodanimation3,
          title: "Logo Animations",
          description: "Make your brand unforgettable and impress audiences instantly with brand new 2D animated logos."
        },
        {
          image: Twodanimation4,
          title:"Cel Animation",
          description: (
            <>
            Use this traditional 2D Animation art style (frame-by-frame animation) to bring a hint of nostalgia to your brand.
            <br></br>
          
            
            </>
          )
        },
        {
          image: Twodanimation5,
          title: "Social Media Animations",
          description: "Increase your reach and improve conversions with the help of expertly crafted custom social media animations."
        },
        {
          image: Twodanimation6,
          title: "Promotional Animated Videos",
          description: (
            <>
              Give your products, services, and brand the boost it needs with custom crafted promotional animated videos.
     
      
            </>
          )
        }
      ];
    return (
        <div>
            <Header/>
            <Helmet>
                <title>2D Animation Services | Animation Rush</title>
                <meta name="description" content="Looking for high-quality 2D animation services that attract, engage, and convert? We specialize in creating visually stunning animations made for businesses, brands, and content creators." />
                <link rel="canonical" href="https://animationrush.com/2d-animation-services" />
            </Helmet>
            <HeroSection 
            {...heroSection} />
       
            <ServiceSec heading="Professional 2D Animation Services in USA" services={servicesData} />
            <ImageRightBanner
                // subHeading="ABOUT US"
                heading="Realistic 2D Animation Services"
                // headinglightblue=" Solutions"
                // heading2=" Crafted for Your Success"
                description={
                    <>
                        We begin your mobile app development journey by going on an in-depth discussion with you to grasp the core purpose, understand the target audience, and identify the features you want in your mobile app. Our collaborative approach helps us define a clear vision, knowing whether the mobile. We begin your mobile app development journey by going on an in-depth discussion with you to grasp the core purpose, understand the target audience, and identify the features you want in your mobile app.
                    </>
                }
                imageSrc={webserviceimg1}
                objectfit="contain"
                imageHeight="500px"  // Set height here

                borderRadius="10px"
                reverseOrder={true}
            // updatePopupTitle={handleTitleChange}
            // buttonUrl="https://www.facebook.com/"
            />
               <ServiceIndustriesSec
        heading="Industries We Excel In"
        description="Prolific Studio delivers custom 2D animations tailored to the unique needs of various industries:"
        industries={industriesData}
      />
            
            <Footer/>
        </div>
    );
};

export default twodaydanimation;
