import React from "react";
import { Link } from "react-router-dom";

import ProjectImage1 from "../../assets/images/rooms/amsterdam-flow-picture-10.jpeg";
import ProjectImage2 from "../../assets/images/rooms/amsterdam-flow-picture-18.jpeg";
import ProjectImage3 from "../../assets/images/rooms/amsterdam-flow-picture-20.jpeg";
import ProjectImage4 from "../../assets/images/rooms/amsterdam-flow-picture-2.jpeg";
import ProjectImage5 from "../../assets/images/rooms/amsterdam-flow-picture-14.jpeg";
import ProjectImage6 from "../../assets/images/rooms/amsterdam-flow-picture-16.jpeg";
import ProjectImage7 from "../../assets/images/rooms/amsterdam-flow-picture-12.jpeg";
import ProjectImage8 from "../../assets/images/rooms/amsterdam-flow-picture-8.jpeg";
import ProjectImage9 from "../../assets/images/rooms/amsterdam-flow-picture-6.jpeg";
import ProjectImage10 from "../../assets/images/rooms/amsterdam-flow-picture-1.jpeg";
import ProjectImage11 from "../../assets/images/rooms/amsterdam-flow-picture-15.jpeg";
import ProjectImage12 from "../../assets/images/rooms/amsterdam-flow-picture-13.jpeg";

import Transition from "../transition/Transition";
import "./SampleProject.css";

const SampleProject = () => {
  return (
    <div 
    className="sample-project-page">
      <div className="project-info">
        <div className="project-index">
          <p>4 Person Room</p>
        </div>
        <div className="project-index">
          <Link to="https://www.booking.com/hotel/nl/flow-amsterdam.nl.html" target="_blank" rel="noopener noreferrer"><h2>BOOK!</h2></Link>        </div>
        <div className="project-description">
          <p>
          Welcome to our cozy four-person room at our hostel! With comfy beds, clean linens, and a warm ambiance, this room is perfect for travelers looking for a comfortable and affordable accommodation. The room is designed to provide a relaxing and peaceful stay, giving you the chance to recharge after a day of exploring. Enjoy your stay!
          </p>
        </div>
        <div className="project-year">
          <p></p>
        </div>
      </div>

      <div className="whitespace-35vh"></div>

      <div className="project-preview">
        <div className="project-preview-col d-only"></div>
        <div className="project-preview-col">
          <div className="work-video-project">
            <div className="work-video-wrapper">
              <img src={ProjectImage9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="sample-images">
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage7} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage8} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage1} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage2} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage3} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage4} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage5} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage6} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage10} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage11} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage12} alt="" />
          </div>

          <div className="project-nav">
            <div className="link">
              <Link to="/rooms"><h2>Back</h2></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(SampleProject);
