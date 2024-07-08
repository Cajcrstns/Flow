import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-col">
          <div className="footer-item">
            <a href="/about">About</a>
          </div>
          <div className="footer-item">
            <a href="/rooms">Rooms</a>
          </div>
          <div className="footer-item">
            <a href="/mindfullness">mindfullness</a>
          </div>
          <div className="footer-item">
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-item">
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <a href="https://www.instagram.com/flow.hostel/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-item">
            <a href="mailto:moos@flowhostel.nl" target="_blank" rel="noopener noreferrer">mail</a>
          </div>
          <div className="footer-item">
            <a href="tel:+31624281824" target="_blank" rel="noopener noreferrer">phone</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
