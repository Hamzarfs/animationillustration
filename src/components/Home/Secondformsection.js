import React, { useState } from "react";
import "../../SecondFormSec.css";
import clutchicon from "../../images/clutchicon.png";
import trust from "../../images/trustpiloticon.png";
import bark from "../../images/barkicon.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SecondFormSec = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // PopupForm wali validation yahan add ki hai
    const validateFormFields = (formFieldName = null) => {
        let isValid;
        const regexes = {
            name: /^[A-Za-z\s]{1,50}$/,
         
            // email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            email: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/,

            phone: /^\+?\d{10,15}$/,
            message: /^(?!\s+$)[^\s].{0,1999}$/,
        };

        if (formFieldName) {
            isValid = regexes[formFieldName].test(formData[formFieldName]);
            const element = document.querySelector(`#secondForm [name=${formFieldName}]`);
            if (element) {
                element.classList.toggle('is-invalid', !isValid);
            }
        } else {
            let allValid = true;
            for (const key in regexes) {
                const isValidField = regexes[key].test(formData[key]);
                const element = document.querySelector(`#secondForm [name=${key}]`);
                if (element) {
                    element.classList.toggle('is-invalid', !isValidField);
                }
                if (!isValidField) allValid = false;
            }
            return allValid;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // PopupForm jaisi validation check
        if (!validateFormFields()) return;

        setLoading(true);
        try {
            const response = await fetch("https://animationrush.com/php_mailer/index.php", {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setLoading(false);
            
            if (data.success) {
                navigate('/thank-you');
            } else {
                Swal.fire('Error', data.message, 'error');
            }
        } catch (error) {
            setLoading(false);
            Swal.fire('Error', 'An error occurred while submitting the form.', 'error');
        }
    };

    return (
        <section className="secondformsec">
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
                        <div className="secondformsec-images mb-3 d-flex gap-3">
                            <a href="https://www.trustpilot.com/review/animationrush.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={trust}
                                    alt="Trustpilot"
                                    className="secondformsec-small-logo"
                                />
                            </a>
                            <a href="https://clutch.co/profile/animation-rush" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={clutchicon}
                                    alt="Clutch"
                                    className="secondformsec-small-logo"
                                />
                            </a>
                            <a href="https://www.bark.com/en/us/company/animation-rush/VVpEmy/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={bark}
                                    alt="Bark"
                                    className="secondformsec-small-logo"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6 col-md-12">
                        <form 
                            className="secondformsec-form p-4" 
                            onSubmit={handleSubmit} 
                            method="POST"
                            id="secondForm" // ID add kiya hai
                        >
                            <h3 className="secondformsec-form-title">Let's Talk About Your Project</h3>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name*"
                                    className="form-control secondformsec-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onInput={() => validateFormFields('name')}
                                    maxLength="52"
                                    required
                                />
                                {/* PopupForm jaisa invalid feedback */}
                                <div className="invalid-feedback">
                                    Not allowed more than 50 characters and it must be alphabetic
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email*"
                                    className="form-control secondformsec-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onInput={() => validateFormFields('email')}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Invalid Email address
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number*"
                                    className="form-control secondformsec-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onInput={() => validateFormFields('phone')}
                                     maxLength="16"
                                    required
                                />
                                <div className="invalid-feedback">
                                    Invalid Phone number. Example: +19876543210
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    placeholder="Enter your message*"
                                    className="form-control secondformsec-input"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onInput={() => validateFormFields('message')}
                                    required
                                    maxLength="2002"
                                ></textarea>
                                <div className="invalid-feedback">
                                    Whitespaces are not allowed in beginning & message should not be more than 2000 characters.
                                </div>
                            </div>
                            <button type="submit" className="btn secondformsec-btn w-100" disabled={loading}>
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                        <span role="status">Submitting...</span>
                                    </>
                                ) : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondFormSec;