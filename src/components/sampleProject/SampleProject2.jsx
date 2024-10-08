import React from "react";
import { Link } from "react-router-dom";


import ProjectImage1 from "../../assets/highlights/7.jpg";
import ProjectImage2 from "../../assets/highlights/8.jpg";
import ProjectImage3 from "../../assets/highlights/31.jpg";
import ProjectImage4 from "../../assets/highlights/29.jpg";
import ProjectImage5 from "../../assets/highlights/17.jpg";
import ProjectImage6 from "../../assets/images/rooms/amsterdam-flow-picture-16.jpeg";
import ProjectImage7 from "../../assets/images/rooms/amsterdam-flow-picture-26.jpeg";
import ProjectImage8 from "../../assets/images/rooms/amsterdam-flow-picture-27.jpeg";
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
          <p>2 Person Room</p>
        </div>
        <div className="project-index">
          <Link to="/contact"><h2>BOOK!</h2></Link>
        </div>
        <div className="project-description">
          <p>
          Welcome to our cozy two-person room!
          The room features two comfortable beds above each other with a shared bathroom. 
          Whether youre traveling with a friend or a loved one, our small but charming room 
          is the perfect choice for a budget-friendly and intimate stay in our hostel. 
          Enjoy your time here!
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
            <img src={ProjectImage1} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage2} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage3} alt="" />
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage4} alt="" />
          </div>
          <div className="img">
            <img src={ProjectImage5} alt="" />
          </div>
        </div>
        <div className="s-row">
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
