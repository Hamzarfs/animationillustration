import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Corrected import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../ServicesSlider.css"; // Add CSS here
import customserviceimage1 from '../images/customservice1.gif';
import customserviceimage2 from '../images/customservice2.gif';
import customserviceimage3 from '../images/customservice3.gif';
import customserviceimage4 from '../images/explain.gif';
import customserviceimage5 from '../images/customservice5.gif';
import customserviceimage6 from '../images/customservice6.gif';
import customserviceimage7 from '../images/customservice7.gif';
import customserviceimage8 from '../images/customservice8.gif';

const AboutServicesSlider = () => {
  const services = [
    customserviceimage1,
    customserviceimage2,
    customserviceimage3,
    customserviceimage4,
    customserviceimage5,
    customserviceimage6,
    customserviceimage7,
    customserviceimage8
  ];

  return (
    <section id="servicesslider" className="servicesslider">
      <div className="container">
        <h2 className="choose-service-heading font-weight-bold">
          Our Professional <span className="lightblue-h2">Video Production</span> Services
        </h2>
        <p className="choose-service-description">
          As a premium video production company, we offer a wide range of services, including
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="services-swiper"
        >
          {services.map((image, index) => (
            <SwiperSlide key={index} className="service-item">
              <div className="service-card">
                <img src={image} alt={`Service ${index + 1}`} className="service-icon" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutServicesSlider;
