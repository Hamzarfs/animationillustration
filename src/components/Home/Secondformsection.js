import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../SecondFormSec.css";
import clutchicon from "../../images/clutchicon.png"
import trust from "../../images/trustpiloticon.png"
import bark from "../../images/barkicon.png"
import accredited from "../../images/accredited.png"

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
    <div className="secondformsec-container container my-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 py-3">
          <h2 className="secondformsec-heading">Animation Production Company</h2>
          <p className="secondformsec-description">
          Prolific animation studio is an LA – based animation production company offering modern and visually striking 2D/3D animated videos and logo animations. Our comprehensive list of 2D/3D animation services includes popular services such as explainer videos, game animations, game trailers cutscenes, logo animation, medical animation, cartoon animation, training videos, commercial animation, whiteboard animation, product modelling & animation, architectural rendering, live-action videos & more.
          </p>
          <div className="secondformsec-images d-flex gap-3">
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
  );
};

export default SecondFormSec;
