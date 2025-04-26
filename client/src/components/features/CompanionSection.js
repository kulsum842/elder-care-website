import React from 'react';
import './CompanionSection.css';
import companionImage from '../../assets/images/featurepage/companion.png';

const CompanionSection = () => {
  return (
    <section className="companion-section">
  <div className="companion-content">
    <h1 className="companion-title">YOUR COMPANION FOR SAFER, HEALTHIER AGING</h1>
    <p className="companion-subtitle">
      From Health Tracking To Emergency Support, Everything You Need Is Right At Your Fingertips.
    </p>
    <p className="companion-subtitle">
      Explore The Tools That Make Daily Elder Care Smarter, Safer, And Easier To Manage — All In One Place.
    </p>
    
    {/* Move circles here */}
    <div className="circle one"></div>
    <div className="circle two"></div>
  </div>

  <div className="companion-image-container">
    <img src={companionImage} alt="Companion Tools" className="companion-image" />
  </div>
</section>

  );
};

export default CompanionSection;
