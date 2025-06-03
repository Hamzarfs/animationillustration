import React, { useState } from 'react';
import Header from '../components/common/header';
import '../App.css'
import bannerImage from '../images/IllustrationBanner.webp';
import whyservice1 from '../images/whyservice1.gif';
import whyservice2 from '../images/whyservice2.gif';
import whyservice3 from '../images/whyservice3.gif';
import whyservice4 from '../images/whyservice4.gif';
import whyservice5 from '../images/whyservice5.gif';
import whyservice6 from '../images/whyservice6.gif';
import customserviceimage1 from "../images/customservice1.gif";
import customserviceimage2 from "../images/customservice2.gif";
import customserviceimage3 from "../images/customservice3.gif";
import customserviceimage4 from "../images/explain.gif";
import customserviceimage5 from "../images/customservice5.gif";
import customserviceimage6 from "../images/customservice6.gif";
import customserviceimage7 from "../images/customservice7.gif";
import customserviceimage8 from "../images/customservice8.gif";
import commitmentImage from "../images/triplecomment1.gif";
import commitmentservice1 from "../images/whyservice1.png";
import commitmentservice2 from "../images/whyservice2.png";
import commitmentservice3 from "../images/whyservice3.png";
import commitmentservice4 from "../images/whyservice4.png";
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
import ServicesSlider from '../components/Services/Serviceslider';
import VideoBanner from '../components/Home/VideoBanner';
import Bannervideo from '../components/Home/Bannervideo';
import TransparentHeader from '../components/common/TransparentHeader';
import AnimatedBanner from '../components/common/AnimatedBanner';


const Home = () => {

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
    ];


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

    const servicesData = [
        { 
            image: customserviceimage1,
             title: "Logo Animation",
              description: "Get clients with our logo animations. Our powerfully creative and unique animations will turn your logo into eye candy." 
            },
        {
             image: customserviceimage2,
             title: "2D Animation",
              description: "Translate your imagination into amazing 2D animations. Character animations and background designs are crafted for you by expert artists, providing you with rich visual and engaging content."
             },
        { 
            image: customserviceimage3,
             title: "3D Animation",
              description: "Bring lifelike 3D animations that enthrall your audience. From product visualization to cinematic sequences, our expert team does everything."
             },
        { 
            image: customserviceimage4,
             title: "Explainer Video",
              description: "Make your cumbersome concepts easy with our great explainer videos using simple and easy-to-understand visuals with short stories to clarify and educate your audience." 
            },
        { 
            image: customserviceimage5, 
            title: "Motion Graphics",
             description: "Add some dramatic effects to your videos with motion graphics services. Ranging from simple transitions to complex animations, our creative capacity knows no bounds."
             },
        {
             image: customserviceimage6,
              title: "Whiteboard Animation",
               description: "Your message will be unforgettable with our whiteboard animations. We use illustrations drawn by hand and voiceovers to explain complex material in a simple, engaging manner." 
            },
        { image: customserviceimage7,
             title: "3D Architecture Animation",
              description: "You can now have your great design come alive through our architectural animations. We can visualize practically anything from buildings to interiors and landscapes." 
            },
        { 
            image: customserviceimage8,
             title: "Cartoon Animation",
              description: "Enjoy and enlighten your audiences with our cartoon animations. Our team will create animated cartoons that entertain, soothe the heart, and educate." 
            },
      ];

      const features = [
        {
          image: commitmentservice1,
          title: "Improve Branding",
          text: "A good brand identity is the most important foundation on which the success of a business stands. Our video production service elevates your brand by creating wonderful visual storytelling that captures your target audience.",
        },
        {
          image: commitmentservice2,
          title: "Increase Engagement",
          text: "Video content is an impeccable mode of engagement for your audience. The video production services reproduce compelling videos for greater social media engagement, website traffic, and conversions.",
        },
        {
          image: commitmentservice3,
          title: "Communicate Messaging",
          text: "One of the many facets of being the best explainer video production agency is having such wonderful and captivating videos to create social media engagement with higher website visitors and increase conversions. Spend money on professional video production and bring your brand to new heights as it fulfills the marketing mission.",
        },
        {
          image: commitmentservice4,
          title: "Guaranteed Quality & Delivery",
          text: "There is always a delivery of high quality with top-notch animation, with deadlines attested to improved professionalism. Our experienced team focuses on operational efficiency along with precision to ensure your project is delivered exactly as it was originally intended.",
        },
      ];

    return (
        <div>
            <Helmet>
                <title>Video Production Company In USA | Animation Rush</title>
                <meta name="description" content="We're a creative video production company specializing in animated explainers, demo videos, product showcases, and other innovative video content." />
                <link rel="canonical" href="https://animationrush.com" />
            </Helmet>
            {/* <Header /> */}
            <TransparentHeader/>
            <Bannervideo/>
            {/* <AnimatedBanner/> */}
            {/* <VideoBanner/>
            <Banner
                subheading="Bringing Your Ideas to Life with Expertise and Creativity"
                heroTitle="Professional Video Production Company Your Vision, Our Expertise"
                description="As a creative video production company, we shape bright and beautiful developing videos. Our team of exemplary professionals will bring your ideas from concept to completion. Whether commercial, explanatory, or brand-film cinematic, we got it for you."
                buttonText="Get Started"
               
                backgroundImage={bannerImage} 
            /> */}
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
                        We are a top creative video production company that believes in combining traditional innovative storytelling with the latest technology. The experience has made our staff realize that the client's vision should always come first above anything. 
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
            buttonUrl="https://www.facebook.com/"
            />
            <PortfolioGallery />
            <ServicesSlider
      title="Our Professional <span class='lightblue-h2'>Video Production</span> Services"
      description="As a premium video production company, we offer a wide range of services, including"
      services={servicesData}
    />
            <TrackRecord />
            <CommitmentClient
  title="Why Choose Our Video Production Services"
  description="When you put your faith in our video production services, you are actually putting it into a team of professional storytellers who know how to grab your audience within seconds."
  commitmentImage={commitmentImage}
  features={features}
/>;
            <FAQSection faqs={faqs} image={faqimg} />
            <Footer />


        </div>
    );
};

export default Home;
