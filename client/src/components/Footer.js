import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Social Icons */}
        <div className="footer-social">
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedin />
        </div>

        {/* Right - Link Columns */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Caregivers</li>
              <li>Membership</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Personal Care</li>
              <li>Companionship</li>
              <li>Transportation</li>
              <li>Wellness Tools</li>
              <li>Flexible Plans</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li>Our Mission</li>
              <li>Meet the Team</li>
              <li>Caregiver Community</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Help / FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

