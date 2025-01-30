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
    })
    const [errors, setErrors] = useState({})

    // Regex patterns and error messages
    const regexes = {
        name: /^[A-Za-z\s]{1,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/,
        phone: /^\+?\d{10,15}$/,
        message: /^(?!\s+$)[^\s].{0,1999}$/,
    }

    const errorMessages = {
        name: "Not allowed more than 50 characters and it must be alphabetic",
        email: "Invalid Email address",
        phone: "Invalid Phone number. Example: +19876543210",
        message: "Whitespaces are not allowed in beginning & message should not be more than 2000 characters.",
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const validateField = (name, value) => {
        if (!regexes[name].test(value)) {
            setErrors(prev => ({ ...prev, [name]: errorMessages[name] }))
        } else {
            setErrors(prev => ({ ...prev, [name]: null }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}
        
        // Validate all fields
        Object.keys(regexes).forEach(key => {
            if (!regexes[key].test(formData[key])) {
                newErrors[key] = errorMessages[key]
            }
        })

        setErrors(newErrors)
        
        if (Object.keys(newErrors).length === 0) {
            setLoading(true)
            try {
                const response = await fetch("https://animationrush.com/php_mailer/index.php", {
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                const data = await response.json()
                setLoading(false)
                
                if (data.success) {
                    navigate('/thank-you')
                } else {
                    Swal.fire('Error', data.message, 'error')
                }
            } catch (error) {
                setLoading(false)
                Swal.fire('Error', 'An error occurred while submitting the form.', 'error')
            }
        }
    }

    return (
        <section className="contact-us-section">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className='fw-bold mb-4'>Let's <span className='highlight'>Talk</span> About Your Project</h2>

                        <form method='POST' id='contact-us-form' onSubmit={handleSubmit}>
                            <div className="form-floating mb-2">
                                <input
                                    type="text"
                                    className={`form-control ${errors.name && 'is-invalid'}`}
                                    id="name"
                                    placeholder="Please Enter Your Full Name"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    onInput={(e) => validateField('name', e.target.value)}
                                    maxLength="52"
                                />
                                <label htmlFor="name">Please Enter Your Full Name*</label>
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            
                            <div className="form-floating mb-2">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email && 'is-invalid'}`}
                                    id="email"
                                    placeholder="Please Enter Your Email Address"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    onInput={(e) => validateField('email', e.target.value)}
                                />
                                <label htmlFor="email">Please Enter Your Email Address*</label>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            
                            <div className="form-floating mb-2">
                                <input
                                    type="tel"
                                    className={`form-control ${errors.phone && 'is-invalid'}`}
                                    id="phone"
                                    placeholder="Please Enter Your Phone Number"
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onInput={(e) => validateField('phone', e.target.value)}
                                    maxLength="16"
                                />
                                <label htmlFor="phone">Please Enter Your Phone Number*</label>
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                            
                            <div className="form-floating mb-2">
                                <textarea
                                    className={`form-control ${errors.message && 'is-invalid'}`}
                                    id="message"
                                    placeholder="Please Enter Your Message"
                                    name='message'
                                    rows={3}
                                    style={{ height: 'unset' }}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onInput={(e) => validateField('message', e.target.value)}
                                    maxLength="2002"
                                ></textarea>
                                <label htmlFor="message">Message*</label>
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            
                            <div className="d-grid">
                                <button className="btn py-3" type="submit" disabled={loading}>
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