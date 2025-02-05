import React from "react";
import "../../serviceIndustriesSec.css"

const ServiceIndustriesSec = ({ heading, description, industries }) => {
  return (
    <section className="serviceindustriessec container py-5">
      {/* Heading Row */}
      <div className="row text-center mb-4">
        <div className="col-12">
          <h2 className="choose-service-heading font-weight-bold">
            {heading} <span className="lightblue-h2"></span>
          </h2>
          <p className="serviceindustries-desc">{description}</p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="row">
        {industries.slice(0, 3).map((industry, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="serviceindus-box text-center p-4">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {industries.slice(3, 6).map((industry, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="serviceindus-box text-center p-4">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceIndustriesSec;
