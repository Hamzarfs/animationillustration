import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "../../ServicesSlider.css"; 

const ServicesSlider = ({ title, description, services }) => {
  return (
    <section id="servicesslider" className="servicesslider">
      <div className="container">
        <h3 className="choose-service-heading font-weight-bold" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="choose-service-description">{description}</p>

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
          {services.map((service, index) => (
            <SwiperSlide key={index} className="service-item">
              <div className="service-card">
                <img src={service.image} alt={service.title} className="service-icon" />
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;
