import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Corrected import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../ServicesSlider.css"; // Add CSS here
import customserviceimage1 from '../../images/customservice1.gif';
import customserviceimage2 from '../../images/customservice2.gif';
import customserviceimage3 from '../../images/customservice3.gif';
import customserviceimage4 from '../../images/explain.gif';
import customserviceimage5 from '../../images/customservice5.gif';
import customserviceimage6 from '../../images/customservice6.gif';
import customserviceimage7 from '../../images/customservice7.gif';
import customserviceimage8 from '../../images/customservice8.gif';
const ServicesSlider = () => {
    const services = [
        {
          image: customserviceimage1,
          title: "Logo Animation",
          description:
            "Get clients with our logo animations. Our powerfully creative and unique animations will turn your logo into eye candy.",
        },
        {
          image: customserviceimage2,
          title: "2D Animation",
          description:
            "Translate your imagination into amazing 2D animations. Character animations and background designs are crafted for you by expert artists, providing you with rich visual and engaging content.",
        },
        {
          image: customserviceimage3,
          title: "3D Animation",
          description:
            "Bring lifelike 3D animations that enthrall your audience. From product visualization to cinematic sequences, our expert team does everything.",
        },
        {
          image: customserviceimage4,
          title: "Explainer Video",
          description:
            "Make your cumbersome concepts easy with our great explainer videos using simple and easy-to-understand visuals with short stories to clarify and educate your audience.",
        },
        {
          image: customserviceimage5,
          title: "Motion Graphics",
          description:
            "Add some dramatic effects to your videos with motion graphics services. Ranging from simple transitions to complex animations, our creative capacity knows no bounds.",
        },
        {
          image: customserviceimage6,
          title: "Whiteboard Animation",
          description:
            "Your message will be unforgettable with our whiteboard animations. We use illustrations drawn by hand and voiceovers to explain complex material in a simple, engaging manner.",
        },
        {
          image: customserviceimage7,
          title: "3D Architecture Animation",
          description:
            "You can now have your great design come alive through our architectural animations. We can visualize practically anything from buildings to interiors and landscapes.",
        },
        {
          image: customserviceimage8,
          title: "Cartoon Animation",
          description:
            "Enjoy and enlighten your audiences with our cartoon animations. Our team will create animated cartoons that entertain, soothe the heart, and educate.",
        }
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
          modules={[ Pagination, Autoplay]}
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
