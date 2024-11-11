import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containersss">
        <div className="footer-col">
          <div className="footer-item">
            <Link to="/about">About</Link>
          </div>
          <div className="footer-item">
            <Link to="/rooms">Rooms</Link>
          </div>
          <div className="footer-item">
            <Link to="/mindfullness">mindfullness</Link>
          </div>
          <div className="footer-item">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-item">
            <Link to="#">Terms</Link>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <a href="https://www.instagram.com/flow.hostel/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-item">
            <a href="mailto:flow.oosterdok@gmail.com" target="_blank" rel="noopener noreferrer">mail</a>
          </div>
          <div className="footer-item">
            <a href="tel:+31622761721" target="_blank" rel="noopener noreferrer">phone</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
