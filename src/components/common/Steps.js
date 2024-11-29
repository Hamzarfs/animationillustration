import React from 'react';
import Step01 from "../../images/step1.gif";
import Step02 from "../../images/step2.gif";
import Step03 from "../../images/step3.gif";
import Step04 from "../../images/step4.gif";

import '../../Stepsection.css';



const StepSection = () => {
  return (
    <section className="step-section">
      <div className="container">
        {/* Section Heading and Description */}
        <div className="section-header text-center">
          <h2>Our Affordable App Design Service Scope</h2>
          <p>Mobile Application design services include building app interfaces that are both user-friendly and interesting.<br/> 
          These services improve user engagement, build a strong brand identity, optimize app functioning, and boost sales. </p>
        </div>

        {/* Step 1 */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-5 order-2 order-md-1 step-content text-center text-md-end">
            <h2>Research and Analysis</h2>
            <p>We begin by deeply understanding your business needs and target audience. Through thorough research and analysis, we gather 
              insights that inform the design process, ensuring the app meets user expectations. This strategic approach helps create a solid 
              foundation for a functional, intuitive app.</p>
          </div>
          {/* Center Step */}
          <div className="col-12 col-md-2 order-1 step-box">
            STEP
            <span>01</span>
          </div>
          {/* Right Image */}
          <div className="col-12 col-md-5 order-3 step-image">
           <img src= {Step01} alt="Placeholder Image" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="row align-items-center">
          {/* Center Step */}
          <div className="col-12 col-md-2 order-1 order-md-2 step-box">
            STEP
            <span>02</span>
          </div>
          {/* Right Content */}
          <div className="col-12 col-md-5 order-2 order-md-3 step-content text-center text-md-start">
            <h2>UX Design</h2>
            <p>After completing a thorough project analysis and roadmap, we focus on designing intuitive and engaging user experiences that make 
              navigation effortless. By understanding your user's needs, we craft user flows that ensure seamless interactions. Our goal is to 
              create an app that feels natural, easy to use and keeps users coming back.</p>
          </div>
          {/* Left Image */}
          <div className="col-12 col-md-5 order-3 order-md-1 step-image">
            <img src= {Step02} alt="Placeholder Image" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-5 order-2 order-md-1 step-content text-center text-md-end">
            <h2>UI Design</h2>
            <p>Our UI designers focus on creating visually striking interfaces that reflect your brand identity. Whether maintaining your existing color scheme, 
              fonts, and graphic style or reinventing your image with a fresh design, we ensure your app stands out. We collaborate closely with you, offering expert 
              insights and innovative ideas to craft a unique visual experience.</p>
          </div>
          {/* Center Step */}
          <div className="col-12 col-md-2 order-1 step-box">
            STEP
            <span>03</span>
          </div>
          {/* Right Image */}
          <div className="col-12 col-md-5 order-3 order-md-1 step-image">
            <img src= {Step03} alt="Placeholder Image" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="row align-items-center">
          {/* Center Step */}
          <div className="col-12 col-md-2 order-1 order-md-2 step-box">
            STEP
            <span>04</span>
          </div>
          {/* Right Content */}
          <div className="col-12 col-md-5 order-2 order-md-3 step-content text-center text-md-start">
            <h2>Development Process</h2>
            <p>Our development process ensures that your app is built with precision and efficiency. From backend integration to front-end functionality, we follow best 
              practices to create a robust, scalable app. At every stage of the development cycle, our mobile app designers ensure usability performance, seamless upgrades, 
              and intense security.</p>
          </div>
          {/* Left Image */}
          <div className="col-12 col-md-5 order-3 order-md-1 step-image">
            <img src= {Step04} alt="Placeholder Image" />
          </div>
        </div>



      </div>
    </section>
  );
}

export default StepSection;
