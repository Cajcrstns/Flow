import React from "react";

import "./footer2.css";

const Footer = () => {
  return (
    <div className="footer2">
      <div className="container">
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
            <a href="https://soundcloud.com/user-130338946" target="_blank" rel="noopener noreferrer">Airbnb</a>
          </div>
          <div className="footer2-item">
            <a href="https://www.booking.com/hotel/nl/flow-amsterdam.nl.html" target="_blank" rel="noopener noreferrer">Booking</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
