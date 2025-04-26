import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    city: "",
    message: "",
    newsletterEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add actual submission logic here
    alert("Message Sent!");
  };

  const handleNewsletterSignup = () => {
    console.log("Newsletter Email:", formData.newsletterEmail);
    alert("Subscribed to Newsletter!");
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">GET IN TOUCH</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-input-row">
            <div className="contact-input-field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-input-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-input-row">
            <div className="contact-input-field">
              <label>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="contact-input-field">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact-input-field full-width">
            <label>Enter Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">Send</button>
        </form>

        <div className="newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe for new releases, promotions, news, receive updates,
            access to exclusive deals, and more.
          </p>
          <input
            type="email"
            name="newsletterEmail"
            placeholder="Your Email"
            value={formData.newsletterEmail}
            onChange={handleChange}
            required
          />
          <button className="signup-button" onClick={handleNewsletterSignup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
