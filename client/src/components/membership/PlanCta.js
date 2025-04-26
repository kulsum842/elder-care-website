import React from 'react';
import './PlanCta.css';
import PlanImage from '../../assets/images/featurepage/cta.png'; 

const PlanCta = () => {
  return (
    <section className="plan-cta">
      <div className="plan-cta-content">
        <img src={PlanImage} alt="Elder Care Illustration" className="plan-cta-image" />
        <div className="plan-cta-text">
          <h2>TAKE THE FIRST STEP TOWARDS BETTER ELDER CARE</h2>
          <button className="plan-cta-button">REGISTER NOW</button>
        </div>
      </div>
    </section>
  );
};

export default PlanCta;
