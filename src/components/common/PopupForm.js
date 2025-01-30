import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../../styles/PopupForm.css'

const PopupForm = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateFormFields = (formFieldName = null) => {
        let isValid
        const regexes = {
            name: /^[A-Za-z][A-Za-z\s]{0,49}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^\+?[0-9-]{10,15}$/,
            message: /^.{1,2000}$/,
        }

        if (formFieldName) {
            isValid = regexes[formFieldName].test(formData[formFieldName])
            const element = document.querySelector(
                formFieldName !== 'message' 
                ? `#popupForm input[name=${formFieldName}]` 
                : `#popupForm textarea[name=${formFieldName}]`
            );
            element?.classList.toggle('is-invalid', !isValid);
        } else {
            let allValid = true;
            for (const key in regexes) {
                const isValidField = regexes[key].test(formData[key]);
                const element = document.querySelector(
                    key !== 'message' 
                    ? `#popupForm input[name=${key}]` 
                    : `#popupForm textarea[name=${key}]`
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

        await fetch("https://animationrush.com/php_mailer/popup.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                document.querySelector('button[data-bs-dismiss]').click()
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
            .catch(() => setLoading(false))
    }

    return (
        <div className="modal fade" id="popupForm" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h4 className="modal-title">Get a free Quote</h4>
                        <button type="button" className="btn-close focus-ring focus-ring-success" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body pt-0">
                        <form method='POST' onSubmit={handleSubmit}>
                            <input type='hidden' name='title' value={formData.title} />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full name*</label>
                                <input 
                                    type="text" 
                                    className="form-control focus-ring focus-ring-success" 
                                    id="name" 
                                    placeholder="John Doe" 
                                    name='name' 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    maxLength="52" 
                                    required 
                                    onInput={() => validateFormFields('name')} 
                                />
                                <div className="invalid-feedback">
                                    Not allowed more than 50 characters and it must be alphabetic
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address*</label>
                                <input 
                                    type="email" 
                                    className="form-control focus-ring focus-ring-success" 
                                    id="email" 
                                    placeholder="example@test.com" 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required 
                                    onInput={() => validateFormFields('email')} 
                                />
                                <div className="invalid-feedback">
                                    Invalid Email address
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone number*</label>
                                <input 
                                    type="tel" 
                                    className="form-control focus-ring focus-ring-success" 
                                    id="phone" 
                                    placeholder="+19876543210" 
                                    name='phone' 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    required 
                                    pattern="\+?[0-9-]{10,15}"
                                     maxLength="16"
                                    onInput={() => validateFormFields('phone')} 
                                />
                                <div className="invalid-feedback">
                                Please enter a valid phone number (between 10 and 15 digits, optional '+').
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message*</label>
                                <textarea 
                                    className="form-control focus-ring focus-ring-success" 
                                    id="message" 
                                    placeholder="Your message..." 
                                    rows="5" 
                                    name='message' 
                                    onChange={handleChange} 
                                    value={formData.message} 
                                    maxLength="2002" 
                                    required
                                    onInput={() => validateFormFields('message')}
                                ></textarea>
                                <div className="invalid-feedback">
                                    Whitespaces are not allowed in beginning & message should not be more than 2000 characters.
                                </div>
                            </div>
                            <div className="d-grid mb-3">
                                <button type='submit' className='btn py-2' disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;