import React from 'react';
import '../../awards.css';

const CustomServices = ({
  customserviceheading, // Props for the heading
  customservicedescription, // Props for the paragraph
  customservicesteps // Array of steps with image, alt text, title, and description
}) => {
  return (
<section id="choose-service-section" className="container  py-5">
  {/* First Row: Heading and Description */}
  <div className="row">
    <div className="col-12 text-center">
      <h2 className="choose-service-heading font-weight-bold ">
        {customserviceheading.customservicetitle} <span className="lightblue-h2">{customserviceheading.customservicehighlight}</span>{customserviceheading.customservicetitle2}
      </h2>
      <p className="choose-service-description">{customservicedescription}</p>
    </div>
  </div>

  {/* First Row: 3 Icon Boxes */}
  <div className="row mt-4">
    {customservicesteps.slice(0, 4).map((step, index) => (
      <div className="col-lg-3 col-md-6 mb-3" key={index}>
        <div className="choose-service-icon-box text-center">
          <img src={step.customserviceimage} alt={step.alt} className="img-fluid mb-3 about-service-icon" />
          <h5 className="choose-service-icon-title font-weight-bold">{step.customservicetitle}</h5>
          <p className="choose-service-icon-text">{step.customservicedescription}</p>
        </div>
      </div>
    ))}
  </div>

</section>

  );
};

export default CustomServices;
