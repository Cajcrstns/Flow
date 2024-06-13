import React, { useEffect } from "react";
import InfoItem2 from "../images/info2image";
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
        <div className="works">
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
              locatie
            </motion.h5>
            </div>
            <div className="information-info2">
            <motion.h3>
             locatie,<br/>
             welke stijger,<br/>
             parking,<br/>
            </motion.h3>
            </div>
            </div>
            <div className="imagecontainer">
              <InfoItem2 className="image"/>
            </div>
          </motion.div>
        </div>
    </motion.div>
    </motion.div>
  );
};

export default Sleep1;