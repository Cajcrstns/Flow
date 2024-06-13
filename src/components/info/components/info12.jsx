import React, { useEffect } from "react";
import InfoItem from "../images/info1image";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"


import "../Info.scss";

const Sleep1 = () => {
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
    <motion.div 
    >
      <motion.div>
        <div className="works-info">
          <motion.div 
          className="row2"
          ref={featured}
          animate={animation}
          initial="hidden"
          variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: easeIn },
          },
          hidden: { opacity: 0, y: 0 },
          }}>
            <div className="text">
            <div className="title-info2">
            <motion.h5>
              location
            </motion.h5>
            </div>
            <div className="information-info2">
            <motion.h3>
             Set in Amsterdam and with Rembrandt House reachable within less than 1 km, 
             FLOW offers concierge services, non-smoking rooms, a shared lounge, free WiFi and a terrace. 
             The property is close to several well-known attractions, 1.3 km from Beurs van Berlage,
             1 km from Basilica of Saint Nicholas and 1.2 km from Amsterdam Central Station. 
             The property is 800 meters from the city center and less than 1 km from the National Opera & Ballet.
            </motion.h3>
            </div>
            </div>
            <div className="imagecontainer">
            <InfoItem className="image"/>
            </div>
          </motion.div>
        </div>
    </motion.div>
    </motion.div>
  );
};

export default Sleep1;