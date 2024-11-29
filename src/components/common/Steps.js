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
          <h2>Flaunting Animation Our Seamless Development Workflow
          </h2>
          <p>At Animation Rush, we believe that a flawless process leads to exceptional results. <br/> 
          Our approach is structured, technified, transparent, and collaborative, ensuring that every step contributes to the creation of high-quality animations. Here’s how we bring your vision to life </p>
        </div>

        {/* Step 1 */}
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-md-5 order-2 order-md-1 step-content text-center text-md-end">
            <h2>Discovery & Ideation</h2>
            <p>We start by understanding your goals, mindset, our audience, and their vision. This phase go thorough discussions, brainstorming,ice breaking  and gathering insights and creative ideas to ensure we align on the project's direction.</p>
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
            <h2>Concept Development</h2>
            <p>Next, we create a detailed concept that outlines the core idea, characters, and animation style. Through mood boards, storyboards, and rough sketches, we bring the idea to life on paper, ensuring everything is aligned with your expectations!</p>
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
            <h2>Design & Animation</h2>
            <p>Once the concept is approved, our talented design team starts working on the visual elements, from character designs to environments. Afterward, we move into the animation phase, where we bring those visuals to life with dynamic movements and attention to detail.</p>
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
            <h2>Final Delivery & Launch</h2>
            <p>After all revisions are made and error and trial is over ,we deliver the polished animation, ensuring it's ready for deployment across your chosen platforms. Our team ensures that the animation works seamlessly in all environments, whether it's for web, mobile, or other mediums.</p>
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
