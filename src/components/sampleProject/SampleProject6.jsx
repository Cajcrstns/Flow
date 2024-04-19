import React from "react";
import { Link } from "react-router-dom";

import ProjectImage1 from "../../assets/images/rooms/amsterdam-flow-picture-10.jpeg";
import ProjectImage2 from "../../assets/images/rooms/amsterdam-flow-picture-18.jpeg";
import ProjectImage3 from "../../assets/images/rooms/amsterdam-flow-picture-24.jpeg";
import ProjectImage4 from "../../assets/images/rooms/amsterdam-flow-picture-2.jpeg";
import ProjectImage5 from "../../assets/images/rooms/amsterdam-flow-picture-14.jpeg";
import ProjectImage6 from "../../assets/images/rooms/amsterdam-flow-picture-16.jpeg";
import ProjectImage7 from "../../assets/images/rooms/amsterdam-flow-picture-25.jpeg";
import ProjectImage8 from "../../assets/images/rooms/amsterdam-flow-picture-9.jpeg";
import ProjectImage9 from "../../assets/images/rooms/amsterdam-flow-picture-6.jpeg";
import ProjectImage10 from "../../assets/images/rooms/amsterdam-flow-picture-1.jpeg";
import ProjectImage11 from "../../assets/images/rooms/amsterdam-flow-picture-15.jpeg";
import ProjectImage12 from "../../assets/images/rooms/amsterdam-flow-picture-13.jpeg";

import "./SampleProject.css";
import Transition from "../transition/Transition";


const SampleProject = () => {
  return (
    <div 
    className="sample-project-page">
      <div 
      >
      <div className="project-info">
        <div className="project-index">
          <p>6 Person Room</p>
        </div>
        <div className="project-index">
          <Link to="https://www.booking.com/hotel/nl/flow-amsterdam.nl.html" target="_blank" rel="noopener noreferrer"><h2>BOOK!</h2></Link>        </div>
        <div className="project-description">
          <p>
          Welcome to our cozy six-person room at our hostel! This compact yet comfortable space is designed to provide a relaxing and affordable stay for small groups. Equipped with all the essential amenities, including comfortable beds and private toilet, the room ensures a convenient and enjoyable experience during your time with us. 
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
