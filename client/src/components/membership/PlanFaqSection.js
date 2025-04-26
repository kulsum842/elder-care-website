// src/components/features/PlanFaqSection.js

import React, { useState } from "react";
import "./PlanFaqSection.css";

const planFaqData = [
  { question: "Can I change my plan later?" },
  { question: "Do you offer yearly pricing options?" },
  { question: "Is customer support included in all plans?" },
  { question: "What happens if I don’t use all the features in my plan?" },
  { question: "Is my personal and medical data safe on this platform?" },
];

const PlanFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="plan-faq-section">
      <h2 className="plan-faq-title">Frequently Asked Questions</h2>
      <div className="plan-faq-questions">
        {planFaqData.map((item, index) => (
          <div
            key={index}
            className={`plan-faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="plan-faq-question">
              <span>{item.question}</span>
              <span className="plan-faq-toggle-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="plan-faq-answer">
                <p>This is a placeholder answer. Replace with real answers later!</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="plan-faq-footer">
        Still have questions? <a href="#contact">Click Here</a>
      </p>
    </section>
  );
};

export default PlanFaqSection;
