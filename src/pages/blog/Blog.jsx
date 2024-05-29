import React from "react";
import ReactPlayer from "react-player";

import Transition from "../../components/transition/Transition";
import "./blog.css";

const Blog = () => {
  return (
    <div 
    className="mustang-page">
      <div 
      >
      <div className="mustang-video">
        <div className="hero-video">
          <div className="video">
          <ReactPlayer
            url="https://vimeo.com/906759866"
            controls={false}
            autoPlay={true}
            loop={true} 
            playing 
            playsinline
            muted
            width="100%"
            height="100%"
            className="video"
          />
          </div>
        </div>
      </div>
      <div className="whitespace-mustang"></div>
      <div 
      className="container"
      >
        <div className="info-row-mindfulness">
          <div className="info-col">
            <div className="info-copy">
              <p>
              Our hostel offers a variety of yoga and meditation classes for guests to enjoy. 
              Whether you are a beginner or an experienced practitioner, our classes cater to all levels. 
              Join us for a rejuvenating session in our serene and peaceful environment, 
              where experienced instructors guide you through various techniques to enhance mindfulness and relaxation. 
              Take some time for yourself and immerse in the transformative power of yoga and meditation during your stay with us.
              </p>
              <br />
              <p className="infotwo">
              We offer this to provide our guests with an opportunity to unwind, de-stress, 
              and find inner peace during their stay. We understand the importance of self-care and well-being, 
              and believe that these practices can greatly enhance the overall experience and enjoyment of our guests. 
              By offering these classes, we aim to create a holistic and nurturing environment where individuals can cultivate a sense of balance and tranquility.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Transition(Blog);
