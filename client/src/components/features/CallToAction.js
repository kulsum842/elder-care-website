// src/components/features/CallToAction.js

import React from "react";
import ctaImage from "../../assets/images/featurepage/cta.png";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-text">
        <h2>STEP INTO SMARTER, SAFER ELDER CARE — TODAY.</h2>
        <p>
          Join a growing community that’s redefining elder care with compassion,
          technology, and trust.
        </p>
        <button className="cta-button">START YOUR JOURNEY</button>
      </div>
      <div className="cta-image">
        <img src={ctaImage} alt="Elder care journey" />
      </div>
    </section>
  );
};

export default CallToAction;
