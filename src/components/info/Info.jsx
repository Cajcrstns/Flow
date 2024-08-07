import React, { useEffect } from "react";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"

import Info1 from "./components/info1";
import Info12 from "./components/info12";
import Info2 from "./components/info2";
import Info22 from "./components/info22";
import Footer2 from "../footer2/Footer2";
import Footer from "../footer/Footer";

import "./Info.scss";

const Info = () => {
  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10%",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <>
    <div className="info-page">
      <div className="column">
        <Info1/>
      </div>
      <div className="row">
        <Info12 />
      </div>
      <div className="column">
        <Info2/>
      </div>
      <div className="row">
        <Info22 />
      </div>
      <Footer2 />
    </div>
    </>
  );
};

export default Info;
