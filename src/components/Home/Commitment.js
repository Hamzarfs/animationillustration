import React from 'react';
import '../../CommitmentClient.css';
import whyservice1 from '../../images/whyservice1.png';
import whyservice2 from '../../images/whyservice2.png';
import whyservice3 from '../../images/whyservice3.png';
import whyservice4 from '../../images/whyservice4.png';
import commitment from '../../images/triplegif.gif';

const CommitmentClient = () => {
  return (
    <section
      className="commitmentclient"
      style={{
        backgroundColor: '#215E88',
        padding: '50px 0',
      }}
    >
      <div className="container commitmentclient-sec">
        <div className="row ">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12 commitmentclient-left mb-4">
            <h2 className="commitmentclient-heading">Commitment To Our Clients</h2>
            <p className="commitmentclient-description">
              At Prolific Studios, we are dedicated to providing exceptional logo animation services
              that exceed your expectations. Our commitment to our clients is reflected in the
              following key areas:
            </p>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="icon-box">
                  <img
                    src={whyservice1}
                    alt="100% Satisfaction Guaranteed"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">100% Satisfaction Guaranteed</h5>
                  <p className="icon-box-text">
                    We are confident in the quality of our work and offer a 100% satisfaction guarantee.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="icon-box">
                  <img
                    src={whyservice2}
                    alt="Personalized Attention"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Personalized Attention</h5>
                  <p className="icon-box-text">
                    Every project receives personalized attention from our experienced team.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice3}
                    alt="Quality Assurance"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Quality Assurance</h5>
                  <p className="icon-box-text">
                    We adhere to strict quality standards to deliver animations that are visually stunning.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice4}
                    alt="Timely Delivery"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Timely Delivery</h5>
                  <p className="icon-box-text">
                    We understand the importance of deadlines and work hard to meet them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-12 commitmentclient-right d-flex justify-content-center">
            <img
              src={commitment}
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
