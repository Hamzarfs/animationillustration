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
                        <div className="right-column">
                            <h2 className="section-heading text-center">
                                Competitive <span className="highlight">Pricing</span> With Outstanding Results
                            </h2>
                            <ul className="list-unstyled mt-5 fa-ul">
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>Most competitive prices, best place to have the perfect balance between cost-effectiveness and top quality in service.</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>Animation Rush has flexible pricing models that suit different types of budgets and project needs-from a startup to a giant enterprise.</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>Thus, we have transparent pricing structures ensuring the best possible value for the investment.</span></li>
                                <li className="mb-2 fw-semibold"><i className="fa-li fa-solid fa-circle"></i><span>Contact our team and discuss your project and get a properly customized quote.</span></li>
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
