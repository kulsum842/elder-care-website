import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <form className="contact-form-wrapper">
        <div className="contact-form-group">
          <label className="contact-form-label">Full Name</label>
          <input type="text" className="contact-form-input" />
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label">Email</label>
          <input type="email" className="contact-form-input" />
        </div>

        <div className="contact-form-row">
          <div className="contact-form-group">
            <label className="contact-form-label">Contact Number</label>
            <input type="text" className="contact-form-input" />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label">City</label>
            <input type="text" className="contact-form-input" />
          </div>
        </div>

        <div className="contact-form-group">
          <label className="contact-form-label">Your Message</label>
          <textarea className="contact-form-textarea"></textarea>
        </div>

        <button type="submit" className="contact-form-button">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
