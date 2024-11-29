import '../../styles/ContactUsSection.css'
import contactUsGif from '../../images/contact-us-gif.gif'

const ContactUsSection = () => {

    return (
        <section className="contact-us-section">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='fw-bold mb-4'>Let's <span className='highlight'>Talk</span> About Your Project</h1>

                        <form method='POST' id='contact-us-form'>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Please Enter Your Full Name" name='name' />
                                <label for="name">Please Enter Your Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Please Enter Your Email Address" name='email' />
                                <label for="email">Please Enter Your Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="phone" placeholder="Please Enter Your Phone Number" name='phone' />
                                <label for="phone">Please Enter Your Phone Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" placeholder="Please Enter Your Phone Number" name='message' rows={3} style={{ height: 'unset' }}></textarea>
                                <label for="message">Message</label>
                            </div>
                            <div class="d-grid">
                                <button class="btn py-3" type="submit">SUBMIT</button>
                            </div>

                        </form>
                    </div>
                    <div className='col-md-6'>
                        <img src={contactUsGif} alt='Animated image' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection
