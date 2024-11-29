import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import "../../Portfoliogallery.css";
import logo1 from "../../images/portfolio1.gif";
import logo2 from "../../images/portfolio2.gif";
import logo3 from "../../images/portfolio3.gif";
import logo4 from "../../images/portfolio4.gif";
import logo5 from "../../images/portfolio5.gif";
import logo6 from "../../images/portfolio6.gif";

const PortfolioGallery = () => {
    // Swiper settings
    const swiperSettings = {
        spaceBetween: 20, // Space between slides
        slidesPerView: 3, // Show 3 slides at a time
        loop: true, // Infinite loop
        autoplay: { delay: 3000 }, // Auto-play with a 3-second delay
        breakpoints: {
            1024: { slidesPerView: 3 }, // 3 slides on large screens
            600: { slidesPerView: 2 }, // 2 slides on medium screens
            0: { slidesPerView: 1 }, // 1 slide on small screens
        },
    };

    return (
        <section className="portfolio-gallery">
            <div className="container-xxl" id="portfolio">
                <div className="container py-5 px-lg-5">
                    <div className="text-center mb-4">
                        <h5 className="text-primary-gradient fw-medium">Portfolio</h5>
                        <h2 className="portfolio-heading">
                            Our Amazing <span className="lightblue-h2">Animations</span> Work!
                        </h2>
                    </div>

                    {/* First Row of Swiper */}
                    <Swiper {...swiperSettings} className="mb-5">
                        <SwiperSlide>
                            <img src={logo1} alt="Portfolio Item 1" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo2} alt="Portfolio Item 2" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo3} alt="Portfolio Item 3" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo4} alt="Portfolio Item 4" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo5} alt="Portfolio Item 5" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo6} alt="Portfolio Item 6" className="img-fluid" />
                        </SwiperSlide>
                    </Swiper>

                    {/* Second Row of Swiper */}
                    <Swiper {...swiperSettings}>
                        <SwiperSlide>
                            <img src={logo1} alt="Portfolio Item 1" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo2} alt="Portfolio Item 2" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo3} alt="Portfolio Item 3" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo4} alt="Portfolio Item 4" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo5} alt="Portfolio Item 5" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={logo6} alt="Portfolio Item 6" className="img-fluid" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
