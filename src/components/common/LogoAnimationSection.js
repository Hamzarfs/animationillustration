import animationsSecImg from '../../images/animations-img.png'
import '../../styles/LogoAnimationSection.css'

const LogoAnimationSection = () => {

    return (
        <section className="logo-animation-section my-5 position-relative">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="first-column col-md-4 text-end mb-4 mb-md-0">
                        <img
                            src={animationsSecImg}
                            alt="The Unsteady Logo"
                            className="img-fluid"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="col-md-8">
                        <div className="right-column text-center">
                            <h2 className="section-heading">
                                Offering <span className="highlight">Nationwide Logo Animation</span> In US And Canada
                            </h2>
                            <ul className="list-unstyled mt-5 fa-ul">
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>logo animation in Los Angeles, CA</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>logo animation in Edwards, CO</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>logo animation in Toronto, ON</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>logo animation in Tavares, FL</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>logo animation in Palo Alto, CA</span></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="black-rect"></div>
        </section>
    )
}

export default LogoAnimationSection
