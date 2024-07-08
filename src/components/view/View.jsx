import React, { useEffect, useRef } from "react";
import "./view.css";

import PortraitImg from "../../assets/images/home/flowSun.jpg";
import leaf2 from "../../assets/images/home/leaf2.png";
import leaf3 from "../../assets/images/home/leaf3.png";
import leaf7 from "../../assets/images/home/leaf7.png";


import { gsap } from "gsap";

const View = () => {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-img", {
        y: "1000",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-tagline", {
        opacity: 0,
        bottom: "-50%",
        duration: 1,
        ease: "power3.out",
        delay: 0.75,
      });

    heroCopyReveal.current.play();
    heroImageReveal.current.play();
    heroTaglineReveal.current.play();
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-img">
        <img src={PortraitImg} alt="" />
        <div className="leafs">
          <img className="leaf2" src={leaf2} />
          <img className="leaf3" src={leaf3} />
          <img className="leaf7" src={leaf7} />
        </div>
      </div>
      <div className="hero-tagline">
        <h5>Expand your creativity. Rewind in the heart of Amsterdam.</h5>
        <p>Expand your creativity. Rewind in the heart of Amsterdam.</p>
      </div>
    </div>
  );
};

export default View;
