import React from "react";

import "./footer2.css";

const Footer = () => {
  return (
    <div className="footer2">
      <div className="containersss">
        <div className="footer-col">
          <div className="footer2-item">
            <a href="/about">About</a>
          </div>
          <div className="footer2-item">
            <a href="/rooms">Rooms</a>
          </div>
          <div className="footer2-item">
            <a href="/mindfullness">mindfullness</a>
          </div>
          <div className="footer2-item">
            <a href="/contact">Contact</a>
          </div>
          <div className="footer2-item">
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer2-item">
            <a href="https://www.instagram.com/flow.hostel/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer2-item">
            <a href="mailto:flow.oosterdok@gmail.com" target="_blank" rel="noopener noreferrer">mail</a>
          </div>
          <div className="footer2-item">
            <a href="tel:+31622761721" target="_blank" rel="noopener noreferrer">phone</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
