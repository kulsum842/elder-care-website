// src/components/features/WhyChoose.js

import React from "react";
import whyChooseGraphic from "../../assets/images/featurepage/why-choose.png";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <img
        src={whyChooseGraphic}
        alt="Why are families choosing us infographic"
        className="why-choose-image"
      />
    </section>
  );
};

export default WhyChoose;
