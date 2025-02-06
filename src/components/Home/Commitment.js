import React from "react";
import "../../CommitmentClient.css";

const CommitmentClient = ({
  title,
  description,
  commitmentImage,
  features,
}) => {
  return (
    <section
      className="commitmentclient"
      style={{ backgroundColor: "#215E88", padding: "50px 0" }}
    >
      <div className="container commitmentclient-sec">
        <div className="row ">
          {/* Left Column */}
          <div className="col-lg-8 col-md-12 commitmentclient-left">
            <h2 className="commitmentclient-heading">{title}</h2>
            <p className="commitmentclient-description">{description}</p>
            <div className="row">
              {features.map((feature, index) => (
                <div className="col-md-6" key={index}>
                  <div className="icon-box">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="icon-box-image"
                    />
                    <h5 className="icon-box-title">{feature.title}</h5>
                    <p className="icon-box-text">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-12 commitmentclient-right d-flex justify-content-center">
            <img
              src={commitmentImage}
              alt="Commitment Illustration"
              className="commitmentclient-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentClient;
