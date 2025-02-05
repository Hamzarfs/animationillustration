import React from "react";
import "../../serviceSec.css";

const ServiceSec = ({ heading, services }) => {
  return (
    <section className="servicesec container py-5">
      {/* Heading Row */}
      <div className="row text-center mb-4">
        <div className="col-12">
          <h2 className="choose-service-heading font-weight-bold">
            {heading} <span className="lightblue-h2"></span>
          </h2>
        </div>
      </div>

      {/* Services Rows */}
      <div className="row">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="servicesec-box text-start border p-4 position-relative">
              <div className="servicesec-icon position-absolute">
                <img src={service.image} alt={service.title} className="img-fluid" />
              </div>
              <h3 className="mt-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-3">
        {services.slice(3, 6).map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="servicesec-box text-start border p-4 position-relative">
              <div className="servicesec-icon position-absolute">
                <img src={service.image} alt={service.title} className="img-fluid" />
              </div>
              <h3 className="mt-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSec;
