import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>
            We are your one-stop shop for all your pet needs. Quality products,
            great service, and happy pets!
          </p>
        </div>
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer__section footer__section--socials">
          <h3>Follow Us</h3>
          <div className="footer__socials">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2025 Pet Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
