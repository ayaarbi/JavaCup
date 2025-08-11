import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <img src="/images/logo.png" alt="Java Cup Logo" className="logo" />
          <h1 className="title">Java Cup</h1>
          <p className="tagline">Your cozy place for fresh brews and sweet treats.</p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#mobileapp">Mobile App</a></li>
            <li><a href="/#menu">Menu</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>📞 (123) 456-7890</p>
          <p>📧 contact@javacup.com</p>
          <p>🪧 123 Coffee Lane, Brewtown, CA 90210</p>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook<i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com">Instagram<i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com">Twitter<i className="fab fa-twitter"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Java Cup. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
