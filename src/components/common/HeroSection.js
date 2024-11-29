import '../../styles/HeroSection.css'


const HeroSection = ({ image, title, subtitle }) => {

    return (
        <section className="hero-section text-center text-white py-5 mx-auto"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="d-flex h-100 align-items-center justify-content-center">
                <div>
                    <h1 className="display-4 fw-semibold">{title}</h1>
                    <p className="lead mx-auto">{subtitle}</p>
                    <a href="#" className="btn custom-btn">Discover More</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
