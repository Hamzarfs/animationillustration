import React from 'react';
import '../../CommitmentClient.css';
import whyservice1 from '../../images/whyservice1.png';
import whyservice2 from '../../images/whyservice2.png';
import whyservice3 from '../../images/whyservice3.png';
import whyservice4 from '../../images/whyservice4.png';
import commitment from '../../images/triplecomment1.gif';

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
          <div className="col-lg-8 col-md-12 commitmentclient-left">
            <h2 className="commitmentclient-heading">Why Choose Our Video Production Services</h2>
            <p className="commitmentclient-description">
            When you put your faith in our video production services, you are actually putting it into a team of professional storytellers who know how to grab your audience within seconds.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice1}
                    alt="Improve Branding"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Improve Branding</h5>
                  <p className="icon-box-text">
                  A good brand identity is the most important foundation on which the success of a business stands. Our video production service elevates your brand by creating wonderful visual storytelling that captures your target audience.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice2}
                    alt="Increase Engagement:"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Increase Engagement:</h5>
                  <p className="icon-box-text">
                  Video content is an impeccable mode of engagement for your audience. The video production services reproduce compelling videos for greater social media engagement, website traffic, and conversions.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice3}
                    alt="Communicate Messaging"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Communicate Messaging</h5>
                  <p className="icon-box-text">
                  One of the many facets of being the best explainer video production agency is having such wonderful and captivating videos to create social media engagement with higher website visitors and increase conversions. Spend money on professional video production and bring your brand to new heights as it fulfills the marketing mission.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <img
                    src={whyservice4}
                    alt="Guaranteed Quality & Delivery"
                    className="icon-box-image"
                  />
                  <h5 className="icon-box-title">Guaranteed Quality & Delivery</h5>
                  <p className="icon-box-text">
                  There is always a delivery of high quality with top-notch animation, with deadlines attested to improved professionalism. Our experienced team focuses on operational efficiency along with precision to ensure your project is delivered exactly as it was originally intended.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-12 commitmentclient-right d-flex justify-content-center">
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
