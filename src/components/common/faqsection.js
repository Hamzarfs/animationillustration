import React, { useState } from 'react';
import '../../faqsection.css'; // Import the unique CSS
import faqbg from '../../images/faqbg.png';

const FAQSection = ({ faqs, image }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faqsection" style={{ backgroundImage: `url(${faqbg})` }}>
            <div className="container">
                <div className="row">
                    {/* First Column for FAQ */}
                    <div className="col-md-6">
                        <h5 className="faqsection-heading">
                            Frequently <span className="lightblue-h2">Asked</span> Questions
                        </h5>
                        <div className="faqsection-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faqsection-item">
                                    <div
                                        className="faqsection-question"
                                        onClick={() => toggleFAQ(index)}
                                        style={{ borderColor: '#215E88' }}
                                    >
                                        {faq.question}
                                        <span className="faqsection-arrow">{activeIndex === index ? '▲' : '▼'}</span>
                                    </div>
                                    {activeIndex === index && <div className="faqsection-answer">{faq.answer}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Second Column for Image */}
                    <div className="col-md-6 align-content-center">
                        <div className="faqsection-image">
                            <img src={image} alt="FAQ Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
