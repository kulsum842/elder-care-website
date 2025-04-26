import React from 'react';
import './ContactDetails.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'; // ← importing icons

const ContactDetails = () => {
  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        <div className="contact-details-item">
          <div className="contact-details-icon">
            <MdEmail className="contact-details-icon-img" />
          </div>
          <h3 className="contact-details-title">Email</h3>
          <a href="mailto:example@gmail.com" className="contact-details-link">example@gmail.com</a>
        </div>

        <div className="contact-details-item">
          <div className="contact-details-icon">
            <MdPhone className="contact-details-icon-img" />
          </div>
          <h3 className="contact-details-title">Phone</h3>
          <p className="contact-details-text">+91 987654321</p>
        </div>

        <div className="contact-details-item">
          <div className="contact-details-icon">
            <MdLocationOn className="contact-details-icon-img" />
          </div>
          <h3 className="contact-details-title">Address</h3>
          <p className="contact-details-text">
            Example address,<br />
            city,<br />
            pincode
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
