import React, { useEffect } from "react";
import Sleep3 from "./components/Sleep3";
import Sleep2 from "./components/Sleep2";
import Sleep1 from "./components/Sleep1";
import Sleep32 from "./components/Sleep32";
import Sleep22 from "./components/Sleep22";
import Sleep12 from "./components/Sleep12";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"


import "./Sleep.scss";

const Work = () => {
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
    <div className="flex">
    <motion.div className="work-page">
      <div className="column">
        <Sleep3/>
      </div>
      <div className="row">
        <Sleep32 />
      </div>
      <div className="column">
        <Sleep2/>
      </div>
      <div className="row">
        <Sleep22 />
      </div>
      <div className="column">
        <Sleep1/>
      </div>
      <div className="row">
        <Sleep12 />
      </div>
    </motion.div>
    </div>
  );
};

export default Work;
