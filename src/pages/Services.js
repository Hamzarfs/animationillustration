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




const ServicesPage = () => {

    const slides = [
        {
            title: 'Wireframe',
            img: sliderImg1,
        },
        {
            title: 'App Design',
            img: sliderImg2,
        },
        {
            title: 'App Development',
            img: sliderImg3,
        },
        {
            title: 'Wireframe',
            img: sliderImg1,
        },
        {
            title: 'App Design',
            img: sliderImg2,
        },
        {
            title: 'App Development',
            img: sliderImg3,
        },
    ]

    const heroSection = {
        title: 'Services',
        image: heroBgImg,
        subtitle: 'kimono photography Agency runs wide and deep. Across many markets, geographies typologies, our team members'
    }

    return (
        <div className="services-page">
            <Helmet>
                <title>Our Services | Animation Rush</title>
                <meta name="description" content="Explore top-notch animation services, from 2D & 3D animation to motion graphics and visual effects. Elevate your brand with creative, engaging animations today!" />
                <link rel="canonical" href="https://animationrush.com/services" />
            </Helmet>
            
            <Header />

            <HeroSection {...heroSection} />

            <section className="services-we-deliver py-5 position-relative">
                <div className="container">
                    <div className="text-center">
                        <h1>Service We Deliver</h1>
                        <p className="description">We stay ahead of the curve, using the latest tools and technologies to deliver high-performance apps.</p>
                    </div>

                    <div className="mx-5">
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
                    <h1 className="text-center mb-5 display-3 fw-semibold">Our Approach to Excellence</h1>
                    <div className="row g-4">
                        <div className="col-md-3 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon1} alt="Animate Your Brand" />
                                        </div>
                                        <h5 className="card-title">Animate Your Brand</h5>
                                    </div>
                                    <p className="card-text">
                                        We bring your ideas to life with cutting-edge app design and development. Our mission is to create user-centric, innovative, and scalable solutions that help businesses thrive in the digital age.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon2} alt="Slick and Smart" />
                                        </div>
                                        <h5 className="card-title">Slick and Smart</h5>
                                    </div>
                                    <p className="card-text">
                                        We bring your ideas to life with cutting-edge app design and development. Our mission is to create user-centric, innovative, and scalable solutions that help businesses thrive in the digital age.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon3} alt="Unleash The Potential" />
                                        </div>
                                        <h5 className="card-title">Unleash The Potential</h5>
                                    </div>
                                    <p className="card-text">
                                        We bring your ideas to life with cutting-edge app design and development. Our mission is to create user-centric, innovative, and scalable solutions that help businesses thrive in the digital age.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 approach-card">
                            <div className="custom-card">
                                <div className="card-body">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="icon">
                                            <img src={approachSecIcon4} alt="The Right Path People" />
                                        </div>
                                        <h5 className="card-title">The Right Path People</h5>
                                    </div>
                                    <p className="card-text">
                                        We bring your ideas to life with cutting-edge app design and development. Our mission is to create user-centric, innovative, and scalable solutions that help businesses thrive in the digital age.
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
                        <div className="col-md-6">
                            <img src={approachSecImg} alt="Our Approach to Excellence" className="img-fluid" />
                        </div>

                        <div className="col-md-6">
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <h2 className="display-5 fw-semibold mb-4">Our Approach to Excellence</h2>

                                    <p className="mb-4">Creating a fictional world is an art, and our expert writers are here to help you perfect it. Whether you have a plot, characters,  just a concept, we transform your vision into a compelling and professionally</p>

                                    <p className="mb-4">Creating a fictional world is an art, and our expert ghostwriters are here to help you perfect it. Whether you have a plot, characters just a concept.</p>

                                    <a href="#" className="btn btn-primary unique-section-button px-4 py-2">Get a Quote</a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <LogoAnimationSection />

            <ContactUsSection />

            <Footer />

        </div>
    )
}

export default ServicesPage
