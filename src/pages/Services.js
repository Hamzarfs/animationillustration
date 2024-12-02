import Header from "../components/common/header"
import '../styles/Services.css'
import heroBgImg from '../images/services-banner.png'
import sliderImg1 from '../images/services-slide-1.png'
import sliderImg2 from '../images/services-slide-2.png'
import sliderImg3 from '../images/services-slide-3.png'
import approachSecIcon1 from '../images/animate.png'
import approachSecIcon2 from '../images/slick.png'
import approachSecIcon3 from '../images/unleash.png'
import approachSecIcon4 from '../images/right-path.png'
import approachSecImg from '../images/our-approach-img.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css";
import CtaSection from "../components/common/ctasection"
import LogoAnimationSection from "../components/common/LogoAnimationSection"
import ContactUsSection from "../components/common/ContactUsSection"
import Footer from "../components/common/footer"
import HeroSection from "../components/common/HeroSection"
import { Helmet } from 'react-helmet-async';
import FAQSection from "../components/common/faqsection"
import faqbg from '../images/faqimg.gif'




const ServicesPage = () => {

    const slides = [
        {
            title: '2D Animation',
            img: sliderImg1,
        },
        {
            title: '3D Animation',
            img: sliderImg2,
        },
        {
            title: 'Explainer Video',
            img: sliderImg3,
        },
        {
            title: 'Motion Graphics',
            img: sliderImg1,
        },
        {
            title: 'Whiteboard Animation',
            img: sliderImg2,
        },
        {
            title: '3D Architecture Animation',
            img: sliderImg3,
        },
        {
            title: 'Logo Animation',
            img: sliderImg1,
        },
        {
            title: 'Cartoon Animation',
            img: sliderImg2,
        },
    ]

    const heroSection = {
        title: 'Services',
        image: heroBgImg,
        subtitle: 'Captivate your audience with our creative and engaging videos. We bring your vision to life, crafting videos that inform, persuade, and inspire.'
    }

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
        <div className="services-page">
            <Helmet>
                <title>Our Services | Animation Rush</title>
                <meta name="description" content="Explore top-notch animation services, from 2D & 3D animation to motion graphics and visual effects. Elevate your brand with creative, engaging animations today!" />
                <link rel="canonical" href="https://animationrush.com/services" />
            </Helmet>

            <Header />

            <HeroSection
                {...heroSection} />

            <section className="services-we-deliver py-5 position-relative">
                <div className="container">
                    <div className="text-center">
                        <h2>Services We Deliver</h2>
                        <p className="description">We offer a wide range of animation services to meet your unique needs.</p>
                    </div>

                    <div className="mx-sm-5">
                        <a className="slider-button slider-button-prev"><i className="fa-solid fa-chevron-left"></i></a>
                        <a className="slider-button slider-button-next"><i className="fa-solid fa-chevron-right"></i></a>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".slider-button-next",
                                prevEl: ".slider-button-prev",
                            }}
                            loop
                            autoplay={false}
                            slidesPerView={3}
                            spaceBetween={30}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                        >
                            {slides.map((slide, i) => (
                                <SwiperSlide key={i}>
                                    <div className="services-slide">
                                        <img src={slide.img} alt={slide.title} className="img-fluid" />
                                        <h3 className="mt-3 text-center">{slide.title}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>

            <section className="approach-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5 display-3 fw-semibold">Our Approach to Excellence</h2>
                    <div className="row g-4">
                        <div className="col-xl-3 col-md-6 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon1} alt="Innovation combined with engagement" />
                                        </div>
                                        <h5 className="card-title">Innovation combined with engagement</h5>
                                    </div>
                                    <p className="card-text">
                                        We craft captivating animations that move audiences, combining creativity and technology with the passion of our talented animators to deliver engaging content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon2} alt="Client-driven Partnership" />
                                        </div>
                                        <h5 className="card-title">Client-driven Partnership</h5>
                                    </div>
                                    <p className="card-text">
                                        We prioritize your vision, working closely with you to ensure satisfaction. We are dedicated to delivering high-quality animations on time and within budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon3} alt="State-of-the-art Technology" />
                                        </div>
                                        <h5 className="card-title">State-of-the-art Technology</h5>
                                    </div>
                                    <p className="card-text">
                                        We are always forward-looking concerning the newest animation tools and techniques, which our top-notch facility uses to produce dazzling visuals and exceptional results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon4} alt="Quality Assurance" />
                                        </div>
                                        <h5 className="card-title">Quality Assurance</h5>
                                    </div>
                                    <p className="card-text">
                                        We take pride in delivering the maximum quality animations. Each project goes through a tough quality control system to ensure it passes out at-times very varied and excessive standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />

            <section className="approach-section-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <img src={approachSecImg} alt="Our Production Process" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 second-column">
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <h2 className="display-5 fw-semibold">Our Production Process</h2>

                                    <p className="">We start the entire process from understanding your vision and goals with a detailed consultation. Then, we make a comprehensive plan that includes storyboarding, scriptwriting, and style guides. Our richly talented animators animate your vision using top-notch illustrative techniques and software.</p>

                                    <p className="">We also make it sound professional with appropriate sound design and music. Finally, it all comes together after meticulous post-production and is delivered to you on time. We are ready to do anything to produce outstanding results and exceed your expectations.</p>

                                    <button data-bs-toggle='modal' data-bs-target='#popupForm' className="btn btn-primary unique-section-button px-4 py-2">Get a Quote</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <FAQSection faqs={faqs} image={faqbg} />

            <LogoAnimationSection />

            <ContactUsSection />

            <Footer />

        </div>
    )
}

export default ServicesPage
