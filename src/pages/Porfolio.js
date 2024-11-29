import CtaSection from "../components/common/ctasection"
import FAQSection from "../components/common/faqsection"
import Header from "../components/common/header"
import HeroSection from "../components/common/HeroSection"
import heroBgImg from '../images/services-banner.png'
import faqbg from '../images/faqimg.gif'
import LogoAnimationSection from "../components/common/LogoAnimationSection"
import ContactUsSection from "../components/common/ContactUsSection"
import Footer from "../components/common/footer"
import '../styles/Portfolio.css'
import portfolioImg1 from '../images/portfolio/portfolio-1.png'
import portfolioImg2 from '../images/portfolio/portfolio-2.png'
import portfolioImg3 from '../images/portfolio/portfolio-3.png'
import portfolioImg4 from '../images/portfolio/portfolio-4.png'
import portfolioImg5 from '../images/portfolio/portfolio-5.png'
import portfolioImg6 from '../images/portfolio/portfolio-6.png'
import portfolioImg7 from '../images/portfolio/portfolio-7.png'
import portfolioImg8 from '../images/portfolio/portfolio-8.png'
import portfolioImg9 from '../images/portfolio/portfolio-9.png'
import portfolioImg10 from '../images/portfolio/portfolio-10.png'
import portfolioImg11 from '../images/portfolio/portfolio-11.png'
import portfolioImg12 from '../images/portfolio/portfolio-12.png'
import portfolioImg13 from '../images/portfolio/portfolio-13.png'
import portfolioImg14 from '../images/portfolio/portfolio-14.png'
import portfolioImg15 from '../images/portfolio/portfolio-15.png'
import portfolioImg16 from '../images/portfolio/portfolio-16.png'
import portfolioImg17 from '../images/portfolio/portfolio-17.png'


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
        { image: portfolioImg6, alt: 'K&D Build Group ' },
        { image: portfolioImg7, alt: '' },
        { image: portfolioImg8, alt: '' },
        { image: portfolioImg9, alt: '' },
        { image: portfolioImg10, alt: '' },
        { image: portfolioImg11, alt: '' },
        { image: portfolioImg12, alt: '' },
        { image: portfolioImg13, alt: '' },
        { image: portfolioImg14, alt: '' },
        { image: portfolioImg15, alt: '' },
        { image: portfolioImg16, alt: '' },
        { image: portfolioImg17, alt: '' },
    ];

    return (
        <section className="portfolio-page">
            <Header />

            <HeroSection image={heroBgImg} title='Portfolio' subtitle='kimono photography Agency runs wide and deep. Across many markets, geographies typologies, our team members' />

            {/* <section className="portfolio-section">
                <div className="container">
                    <h1 className="text-center">
                        Our Animation Development Process
                    </h1>
                </div>
            </section> */}

            <section className="logo-grid-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Animation Development Process</h2>
                    <div className="row g-3">
                        {logos.map((logo, index) => (
                            <div className="col-6 col-md-3" key={index}>
                                <div className="logo-card text-center">
                                    <img src={logo.src} alt={logo.alt} className="img-fluid logo-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />

            <FAQSection faqs={faqs} image={faqbg} />

            <LogoAnimationSection />

            <ContactUsSection />

            <Footer />


        </section>
    )
}

export default Portfolio
