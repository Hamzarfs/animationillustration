import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactusbg from '../../images/formbg.png'
import '../../ContactUspg.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactUsform = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateFormFields = (formFieldName = null) => {
        let isValid;
        const regexes = {
            firstName: /^[A-Za-z][A-Za-z\s]{0,49}$/,
            lastName: /^[A-Za-z][A-Za-z\s]{0,49}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^\+?\d{10,15}$/,
            message: /^.{1,2000}$/,
        }

        if (formFieldName) {
            isValid = regexes[formFieldName].test(formData[formFieldName]);
            const element = document.querySelector(
                formFieldName !== 'message' 
                ? `.contactuspg-form input[name=${formFieldName}]` 
                : `.contactuspg-form textarea[name=${formFieldName}]`
            );
            element?.classList.toggle('is-invalid', !isValid);
        } else {
            let allValid = true;
            for (const key in regexes) {
                const isValidField = regexes[key].test(formData[key]);
                const element = document.querySelector(
                    key !== 'message' 
                    ? `.contactuspg-form input[name=${key}]` 
                    : `.contactuspg-form textarea[name=${key}]`
                );
                element?.classList.toggle('is-invalid', !isValidField);
                if(!isValidField) allValid = false;
            }
            return allValid;
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!validateFormFields())
            return

        setLoading(true)

        await fetch("https://animationrush.com/php_mailer/contact.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
            .catch(() => setLoading(false))
    }

    return (
        <section className="contactuspg-section py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center ">
                        <h2 className="contactuspg-heading-row mb-3">Let’s Animate Your Vision to Life</h2>
                        <p className="contactuspg-subtext">We’re excited to collaborate with you! Whether you’re ready to start your next animation project or just exploring ideas, our team is here to make it happen. Reach out to us through any of the channels below:</p>
                    </div>
                </div>

                <div className="contactuspg-bg ">
                    <div className="contactuspg-heading-row text-center py-2">
                        <h2 className="contactuspg-heading">Contact Us</h2>
                        <p className="contactuspg-subtext">Any question or remarks? Just write us a message!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 contactuspg-info mb-4">
                            <div
                                className="contactuspg-info-box p-4"
                                style={{
                                    backgroundImage: `url(${contactusbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px',
                                    color: '#fff',
                                }}
                            >
                                <h3>Contact Information</h3>
                                <p>Or simply fill out the form, and we’ll get back to you faster than the next animation frame! Let’s create something unforgettable together.</p>
                               
                                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" className="contactuspg-link">
                                    <FaMapMarkerAlt /> 41 Winthrop Rd, Edison, NJ 08817<br />
                               </a>
                                <a href="tel:+15515543283" target="_blank" className="contactuspg-link">
                                    <FaPhoneAlt /> +1 (551) 554-3283
                                </a><br />
                                <a href="mailto:info@animationrush.com" className="contactuspg-link">
                                    <FaEnvelope /> info@animationrush.com
                                </a>
                                <div className="contactuspg-social-icons d-flex">
                                    <a href="https://www.facebook.com/AnimationRush/" className="contactuspg-icon"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/animationrush_us/" className="contactuspg-icon"><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/company/animation-rush/" className="contactuspg-icon"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 contactuspg-form bg-light p-4">
                            <form method='POST' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control contactuspg-input" 
                                            onChange={handleChange} 
                                            value={formData.firstName} 
                                            name='firstName' 
                                            placeholder="First Name*" 
                                            required 
                                            maxLength="52"
                                            onInput={() => validateFormFields('firstName')}
                                        />
                                        <div className="invalid-feedback">
                                            Not allowed more than 50 characters and it must be alphabetic
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control contactuspg-input" 
                                            onChange={handleChange} 
                                            value={formData.lastName} 
                                            name='lastName' 
                                            placeholder="Last Name*" 
                                            required 
                                            maxLength="52"
                                            onInput={() => validateFormFields('lastName')}
                                        />
                                        <div className="invalid-feedback">
                                            Not allowed more than 50 characters and it must be alphabetic
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control contactuspg-input" 
                                            onChange={handleChange} 
                                            value={formData.email} 
                                            name='email' 
                                            placeholder="Email*" 
                                            required 
                                            onInput={() => validateFormFields('email')}
                                        />
                                        <div className="invalid-feedback">
                                            Invalid Email address
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input 
                                            type="tel" 
                                            className="form-control contactuspg-input" 
                                            onChange={handleChange} 
                                            value={formData.phone} 
                                            name='phone' 
                                            placeholder="Phone Number*" 
                                             maxLength="16"
                                            required 
                                            onInput={() => validateFormFields('phone')}
                                        />
                                        <div className="invalid-feedback">
                                            Invalid Phone number. Example: +19876543210
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.subject} name='subject' placeholder="Subject" required />
                                </div>
                                <div className="mb-3">
                                    <textarea 
                                        className="form-control contactuspg-input" 
                                        rows="5" 
                                        onChange={handleChange} 
                                        value={formData.message} 
                                        name='message' 
                                        placeholder="Message*" 
                                        required 
                                        maxLength="2002"
                                        onInput={() => validateFormFields('message')}
                                    ></textarea>
                                    <div className="invalid-feedback">
                                        Whitespaces are not allowed in beginning & message should not be more than 2000 characters.
                                    </div>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn-submit" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                                <span role="status">Submitting...</span>
                                            </>
                                        ) : 'Submit Now'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsform;