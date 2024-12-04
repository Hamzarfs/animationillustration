import React from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/common/HeroSection';
import '../styles/Portfolio.css';
import ContactUsSection from '../components/common/ContactUsSection';
import LogoAnimationSection from '../components/common/LogoAnimationSection';
import FAQSection from '../components/common/faqsection';
import CtaSection from '../components/common/ctasection';
import portfolioImg1 from '../images/gallery5.gif'
import portfolioImg2 from '../images/gallery4.gif'
import portfolioImg3 from '../images/gallery3.gif'
import portfolioImg4 from '../images/gallery2.gif'
import portfolioImg5 from '../images/portfolio3.gif'
import portfolioImg6 from '../images/gallery6.gif'
import portfolioImg7 from '../images/gallery7.gif'
import portfolioImg8 from '../images/gallery8.gif'
import portfolioImg9 from '../images/gallery9.gif'
import portfolioImg10 from '../images/gallery10.gif'
import portfolioImg11 from '../images/gallery11.gif'
import portfolioImg12 from '../images/gallery12.gif'
import portfolioImg13 from '../images/portfolio1.gif'
import portfolioImg14 from '../images/portfolio2.gif'
import portfolioImg15 from '../images/portfolio4.gif'
import portfolioImg16 from '../images/portfolio5.gif'
import portfolioImg17 from '../images/portfolio6.gif'
import portfolioImg18 from '../images/uniqueanimation.gif'
import heroBgImg from '../images/Portfolio.webp'
import faqbg from '../images/faqimg.gif'
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';



const Portfolio = () => {
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

    const logos = [
        { image: portfolioImg1, alt: 'SMI Yacht Coatings LTD' },
        { image: portfolioImg2, alt: 'One God' },
        { image: portfolioImg3, alt: 'AG Machine Tech LTD' },
        { image: portfolioImg4, alt: 'Innovative Tint Solutions' },
        { image: portfolioImg5, alt: 'Bespoke Living Rooms' },
        { image: portfolioImg6, alt: 'K&D Build Group LTD' },
        { image: portfolioImg7, alt: 'The Higher Power Rangers' },
        { image: portfolioImg8, alt: 'RP Dreams' },
        { image: portfolioImg9, alt: 'AJC Plastering' },
        { image: portfolioImg10, alt: 'Girl Power Electric' },
        { image: portfolioImg11, alt: 'Pezzo Food Group' },
        { image: portfolioImg12, alt: 'The Oxx House Fight Club' },
        { image: portfolioImg13, alt: 'All UK Waste Solutions LTD' },
        { image: portfolioImg14, alt: 'Kokein' },
        { image: portfolioImg15, alt: 'Anas, Eliyas & I' },
        { image: portfolioImg16, alt: 'Barratlantic LTD' },
        { image: portfolioImg17, alt: 'Apex Auto Detailing' },
        { image: portfolioImg18, alt: 'Apex Auto Detailing' },
    ];
    return (
        <section className="portfolio-page">
            <Helmet>
                <title>Our Portfolio: Stunning Video Animations That Inspire</title>
                <meta name="description" content="Explore our portfolio of video animations. See how we bring ideas to life with creative visuals, engaging storytelling, and top-notch quality." />
                <link rel="canonical" href="https://animationrush.com/portfolio" />
            </Helmet>

            <Header />

            <HeroSection image={heroBgImg} title='Portfolio' subtitle='Our portfolio reflects our dedication to creativity and innovation. It showcases a diverse range of projects, from captivating 2D designs to immersive 3D experiences.' />

            <section className="logo-grid-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Let Our Work Do The Talking</h2>
                    <Box>
                        <Masonry columns={3} spacing={2}>
                            {logos.map((logo, index) => (
                                <div key={index}>
                                    <img
                                        src={logo.image}
                                        alt={logo.alt}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            display: 'block',
                                            width: '100%',
                                        }}
                                        className='logo-card'
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </Box>
                </div>
            </section>

            <CtaSection />

            <FAQSection faqs={faqs} image={faqbg} />

            <LogoAnimationSection />

            <ContactUsSection />

            <Footer />

        </section>
    );
};

export default Portfolio;
