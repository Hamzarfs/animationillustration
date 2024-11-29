import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../SecondFormSec.css";
import clutchicon from "../../images/clutchicon.png"
import trust from "../../images/trustpiloticon.png"
import bark from "../../images/barkicon.png"
import accredited from "../../images/accredited.png"
import bgimgsecond from "../../images/bgblue.webp"

const SecondFormSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || /\d/.test(formData.name)) {
      newErrors.name = "Name must not contain numbers or be empty.";
    }
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a 10-digit number.";
    }
    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="secondformsec" 
    // style={{ backgroundImage: `url(${bgimgsecond})`, backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // }}
    >
    <div className="secondformsec-container container " >
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12">
          <h2 className="secondformsec-heading">Animation Video Production Company in the USA</h2>
          <p className="secondformsec-description">
          Animation Rush is the premier animation video production company in the USA. We are experts in creating videos that animate your ideas. Our animation experts and storytellers design high-quality 2D and 3D animations fitting your requirements, from explainer videos to real advertising spots. We offer all kinds of video production services to connect with your customers. 
            <br></br><br></br>

          At Animation Rush, we understand how animation can help you visually and engagingly compile huge amounts of data into small, digestible messages. Our professional video production services include character-based animation, motion graphics, and whiteboard animation, among many others. Animation specialists working with our clients come up with unique styles that suit the clients' branding while considering their target audiences. Let us help you enhance your brand through innovative animation.
          </p>
          <div className="secondformsec-images d-flex gap-3 mb-3">
            <a href="https://trustpilot.com" target="_blank" rel="noopener noreferrer">
              <img
                src={trust}
                alt="Trustpilot"
                className="secondformsec-small-logo"
              />
            </a>
            <a href="https://clutch.co" target="_blank" rel="noopener noreferrer">
              <img
                src={clutchicon}
                alt="Clutch"
                className="secondformsec-small-logo"
              />
            </a>
            <a href="https://bark.com" target="_blank" rel="noopener noreferrer">
              <img
                src={bark}
                alt="Bark"
                className="secondformsec-small-logo"
              />
            </a>
            <a href="https://bbb.org" target="_blank" rel="noopener noreferrer">
              <img
                src={accredited}
                alt="BBB"
                className="secondformsec-small-logo"
              />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12">
          <form className="secondformsec-form p-4" onSubmit={handleSubmit}>
            <h3 className="secondformsec-form-title">Let's Talk About Your Project</h3>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="form-control secondformsec-input"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small className="secondformsec-error">{errors.name}</small>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control secondformsec-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small className="secondformsec-error">{errors.email}</small>}
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="form-control secondformsec-input"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <small className="secondformsec-error">{errors.phone}</small>}
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Enter your message"
                className="form-control secondformsec-input"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="secondformsec-error">{errors.message}</small>}
            </div>
            <button type="submit" className="btn secondformsec-btn w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SecondFormSec;
