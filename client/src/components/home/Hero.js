import React from 'react';
import './Hero.css';
import heroBg from '../../assets/images/hero-bg.png';

const Hero = () => {
  const handleGetStarted = () => {
    const user = localStorage.getItem('user');
    if (user) {
      window.location.href = '/membership'; // Redirect to membership page if logged in
    } else {
      window.location.href = '/register'; // Redirect to register page if not logged in
    }
  };

  return (
    <section
      className="hero"
      aria-label="Hero section promoting caregiving features"
      style={{ backgroundImage: `url(${heroBg})` }} // decorative image
    >
      <div className="hero-overlay">
        <h1 className="hero-title">CARING MADE EASY</h1>
        <p className="hero-subtitle">
          Connect with caregivers, manage health, stay safe.
        </p>
        <button
          className="hero-button"
          aria-label="Get started with caregiving services"
          onClick={handleGetStarted} // Added onClick handler
        >
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default Hero;
