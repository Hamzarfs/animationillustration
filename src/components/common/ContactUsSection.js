import '../../styles/ContactUsSection.css'
import contactUsGif from '../../images/contact-us-gif.gif'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ContactUsSection = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            setLoading(true)
            await fetch("https://animationrush.com/php_mailer/index.php", {
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
        }
    };


    return (
        <section className="contact-us-section">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='fw-bold mb-4'>Let's <span className='highlight'>Talk</span> About Your Project</h2>

                        <form method='POST' id='contact-us-form' onSubmit={handleSubmit}>
                            <div className="form-floating mb-2">
                                <input type="text" className="form-control" id="name" placeholder="Please Enter Your Full Name" name='name' value={formData.name} onChange={handleChange} />
                                <label for="name">Please Enter Your Full Name</label>
                            </div>
                            {errors.name && <small className="secondformsec-error">{errors.name}</small>}
                            <div className="form-floating mb-2">
                                <input type="email" className="form-control" id="email" placeholder="Please Enter Your Email Address" name='email' value={formData.email} onChange={handleChange} />
                                <label for="email">Please Enter Your Email Address</label>
                            </div>
                            {errors.email && <small className="secondformsec-error">{errors.email}</small>}
                            <div className="form-floating mb-2">
                                <input type="tel" className="form-control" id="phone" placeholder="Please Enter Your Phone Number" name='phone' value={formData.phone} onChange={handleChange} />
                                <label for="phone">Please Enter Your Phone Number</label>
                            </div>
                            {errors.phone && <small className="secondformsec-error">{errors.phone}</small>}
                            <div className="form-floating mb-2">
                                <textarea className="form-control" id="message" placeholder="Please Enter Your Phone Number" name='message' rows={3} style={{ height: 'unset' }} value={formData.message} onChange={handleChange}></textarea>
                                <label for="message">Message</label>
                            </div>
                            {errors.message && <small className="secondformsec-error">{errors.message}</small>}
                            <div class="d-grid">
                                <button class="btn py-3" type="submit" disabled={loading}>
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
                    <div className='second-column col-md-6'>
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <img src={contactUsGif} alt='Animated image' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection
