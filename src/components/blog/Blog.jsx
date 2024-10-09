import React from "react";
import ReactPlayer from "react-player";

import Transition from "../transition/Transition";
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
                  Welcome to Flow’s unique mindfulness yoga tour for solo male and female travelers. We warmly invite
                  you to come join us on our upcoming yoga retreat this summer where we will sail around Holland for 8
                  peaceful days, beginning and ending in the beautiful city of Amsterdam. This is a specially curated trip in
                  which we will practice yoga daily with a range of vinyasa, restorative, hatha, and yin-yang styles.
                  Regardless of your previous experience, this retreat caters to all levels and offers many opportunities to
                  improve your yoga skills. Along with the yoga you can expect to participate in various mindfulness
                  workshops each afternoon some may include meditation, breath-work, and journaling. Your teachers on
                  the Flow will guide you in learning new and simple practices to engage with openness. However, like the
                  rest of this retreat we will go with the flow and see what serves us best.
                </p>
                <br />
                <p className="infotwo">
                  To step onto The Flow this summer is to take the time for you, to tune in and open up to the inspiration
                  which is all around. We will unplug from our phones and rediscover the joy within that nature can bring
                  to all of us. The Flow is the perfect space to allow your authentic self to flourish and feel the healing
                  benefits of your yoga practice, nourishing meals, and the fresh air on your face each morning. Everyday
                  will be a new adventure filled with yoga, self-exploration, swimming in the sea, and mediating by anchor.
                  Come and practice, rest and renew yourself.
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
