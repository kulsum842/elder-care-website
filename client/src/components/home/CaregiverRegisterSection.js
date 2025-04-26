import React from "react";
import "./CaregiverRegisterSection.css";
import caregiverImage from "../../assets/images/caregiverregister.png";

const CaregiverRegisterSection = () => {
  return (
    <div className="caregiver-wrapper">
      {/* Left Column */}
      <div className="caregiver-column caregiver-content">
        <h2 className="caregiver-title">
          ARE YOU A CAREGIVER? JOIN OUR CAREGIVING COMMUNITY NOW!
        </h2>
        <p className="caregiver-text">
          Be part of a trusted network of professional caregivers and grow your
          caregiving career with flexible work opportunities.
        </p>
        <div className="caregiver-steps">
          {/* Connector lines */}
          <div className="line left-line"></div>
          <div className="line right-line"></div>

          {/* Step 1 */}
          <div className="step">
            <div className="caregiver-circle">1</div>
            <p className="step-title">CREATE<br />PROFILE</p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <p className="step-title">GET<br />VERIFIED</p>
            <div className="caregiver-circle">2</div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="caregiver-circle">3</div>
            <p className="step-title">START GETTING<br />BOOKINGS</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="caregiver-column caregiver-image-column">
        <img
          src={caregiverImage}
          alt="Caregiver Join"
          className="caregiver-image"
        />
        <a href="#register" className="caregiver-register-button">REGISTER NOW</a>
      </div>
    </div>
  );
};

export default CaregiverRegisterSection;
