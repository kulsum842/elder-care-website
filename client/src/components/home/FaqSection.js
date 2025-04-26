import React, { useState } from "react";
import "./FaqSection.css";
import faqImage from "../../assets/images/faq.png";

const faqData = [
  "Is this platform convenient for my elderly parent to use?",
  "Do I need to install anything?",
  "What if a caregiver cancels last minute?",
  "Can I change or cancel my subscription later?"
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
    <div className="faq-image-container">
        <img src={faqImage} alt="FAQ" className="faq-image" />
    </div>
    <div className="faq-content">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-items">
        {faqData.map((question, index) => (
    <div
        key={index}
        style={{ animationDelay: `${index * 0.1}s` }}
        className={`faq-item ${openIndex === index ? "open" : ""}`}
        onClick={() => toggleIndex(index)}
    >
        <div className="faq-question">
        <span>{question}</span>
        <span className="plus">{openIndex === index ? "−" : "+"}</span>
        </div>
        {openIndex === index && (
        <div className="faq-answer">
            <p>This is a placeholder answer for the question.</p>
        </div>
    )}
  </div>
))}

        </div>
        <a href="/contact" className="faq-link">
        Still have questions? Click Here
        </a>
    </div>
    </div>

  );
};

export default FaqSection;
