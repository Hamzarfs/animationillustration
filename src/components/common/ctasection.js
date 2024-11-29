import React from 'react';
import '../../awards.css';

const CtaSection = () => {
    return (
        <section className="unique-section">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center unique-section-container">
                            <p className="unique-section-text mb-0">
                                Kickstart your <span className="lightblue-h2">Mobile App</span> project today!
                            </p>
                            <a href="#" className="btn btn-primary unique-section-button px-4 py-2">Get a Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CtaSection;
