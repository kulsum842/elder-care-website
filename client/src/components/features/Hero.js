import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/featurepage/caregiving.png'; // Adjust the path if needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">WHAT ARE YOU SIGNING UP FOR?</h1>
        <p className="hero-subtitle">
          All-in-one platform designed to support elderly care, family peace of mind, and professional caregiving.
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Elderly care illustration" />
      </div>
    </section>
  );
};

export default Hero;
