// src/components/features/SupportFeatures.js

import React from "react";
import panIndiaImg from "../../assets/images/featurepage/pan-india.png";
import supportImg from "../../assets/images/featurepage/support.png";
import onboardingImg from "../../assets/images/featurepage/onboarding.png";
import "./ServiceFeatures.css";

const ServiceFeatures = () => {
  return (
    <section className="support-features-section">
      <div className="support-cards-wrapper">
        <div className="support-card">
          <h3>PAN INDIA SERVICES</h3>
          <p>We’re here for families across the country. HomeAlone connects you with verified caregivers and support services in cities, towns, and growing regions throughout India. No matter where you are, trusted care is never far away.</p>
          <img src={panIndiaImg} alt="Pan India Services" />
        </div>
        <div className="support-card">
          <h3>DEDICATED SUPPORT TEAM</h3>
          <p>We believe in clarity, empathy, and prompt responses. Our customer support team is available to guide you through every step — from onboarding to emergency issues — with zero confusion and full transparency.</p>
          <img src={supportImg} alt="Dedicated Support Team" />
        </div>
        <div className="support-card">
          <h3>PERSONAL ONBOARDING</h3>
          <p>From the moment you join, we help you feel confident and supported. Our guided onboarding ensures you understand every tool, and premium users get personalized help choosing caregivers, setting up health tools, and more.</p>
          <img src={onboardingImg} alt="Personal Onboarding" />
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
