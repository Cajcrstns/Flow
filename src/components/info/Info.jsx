import React, { useEffect } from "react";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Info1 from "./components/info1";

import "./Info.scss";

import Info2 from "./components/info2";
import Footer2 from "../footer2/Footer2";


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
    <motion.div className="info-page">
      <Info1 />
      <Info2 />
      <Footer2 />
    </motion.div>
  );
};

export default Info;
