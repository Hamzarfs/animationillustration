import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Helmet } from 'react-helmet-async';
import ImageRightBanner from '../components/common/ImageRightbanner';
import aboutus1 from '../images/aboutuscharacter.gif';
import aboutus2 from '../images/vision.gif';
import aboutus3 from '../images/aboutus3.png';
import ImageLeftTab from '../Aboutus/Imagelefttabs';
import CtaSection from '../components/common/ctasection';
import FAQSection from '../components/common/faqsection';
import faqimg from '../images/faqimg.gif';
import appvalues1 from '../images/Appvalues1.png';
import appvalues2 from '../images/Appvalues2.png';
import appvalues3 from '../images/Appvalues3.png';
import appvalues4 from '../images/Appvalues4.png';
import AboutService from '../Aboutus/aboutservice';
import HeroSection from '../components/common/HeroSection';
import heroBgImg from '../images/aboutusbanner.png'
import AboutServicesSlider from '../Aboutus/aboutserviceslider';
import ServicesSlider from '../components/Services/Serviceslider';
import customserviceimage1 from "../images/customservice1.gif";
import customserviceimage2 from "../images/customservice2.gif";
import customserviceimage3 from "../images/customservice3.gif";
import customserviceimage4 from "../images/explain.gif";
import customserviceimage5 from "../images/customservice5.gif";
import customserviceimage6 from "../images/customservice6.gif";
import customserviceimage7 from "../images/customservice7.gif";
import customserviceimage8 from "../images/customservice8.gif";

const About = () => {

    const customserviceheading = {

        customservicetitle: "Creative",
        customservicehighlight: " Animation",
        customservicetitle2: " Solutions"
    };
    const customservicedescription = "We deliver high-quality, custom animation services tailored to bring your ideas to life, engage audiences, and elevate your brand.";
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
        {
            image: customserviceimage7,
            title: "3D Architecture Animation",
            description: "You can now have your great design come alive through our architectural animations. We can visualize practically anything from buildings to interiors and landscapes."
        },
        {
            image: customserviceimage8,
            title: "Cartoon Animation",
            description: "Enjoy and enlighten your audiences with our cartoon animations. Our team will create animated cartoons that entertain, soothe the heart, and educate."
        },
    ];

    const heroSection = {
        title: 'About Us',
        image: heroBgImg,
        subtitle: 'Animation Rush is a confluence of artistry and technology, dedicated to creating animations that speak volumes.'
    }
    return (
        <div>
            <Helmet>
                <title>About Us | Animation Rush</title>
                <meta name="description" content="Explore Animation Rush—our mission, vision, and the creative team driving our innovative digital solutions. Learn about our story on our About Us page." />
                <link rel="canonical" href="https://animationrush.com/about-us" />
            </Helmet>
            <Header />
            <HeroSection
                {...heroSection} />

            <ImageRightBanner
                // subHeading="ABOUT US"
                heading="Where Creativity Meets"
                headinglightblue=" Animation"
                heading2=" Mastery"
                description={
                    <>
                        At Animation Rush, we blend artistic imagination with technical precision to create animations that stand out. Our team of skilled animators brings fresh ideas to life, crafting visuals that capture attention and spark emotion. Whether it's a simple character animation or a complex 3D masterpiece, we ensure every detail reflects our commitment to excellence.


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
            {/* <AboutService
                customserviceheading={customserviceheading}
                customservicedescription={customservicedescription}
                customservicesteps={customservicesteps}
            /> */}
            <ServicesSlider
                title="Our Professional <span class='lightblue-h2'>Video Production</span> Services"
                description="As a premium video production company, we offer a wide range of services, including"
                services={servicesData}
            />

            <CtaSection />


            <ImageRightBanner
                // subHeading="ABOUT US"
                heading="What Our Clients Dream Of!"
                // headinglightblue=" Solutions"
                // heading2=" Crafted for Your Success"
                description={
                    <>
                        At Animation Rush, we turn our clients' most ambitious digital dreams into reality. Our clients envision apps that not only function seamlessly but also captivate users and drive business success. We listen to their goals and work collaboratively to create solutions that exceed expectations—delivering intuitive, scalable, and innovative app frameworks that align with their vision. By partnering with us, clients experience the transformation of their digital ideas into powerful tools for growth and engagement. We don’t just meet client needs; we anticipate them, crafting experiences that inspire and drive results.
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
            <Footer />
        </div>
    );
};

export default About;
