import React, { useEffect } from "react";
import WorkItem2 from "../rooms/room4";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"


import "../Sleep.scss";

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
          className="row1"
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
            <div className="title2">
            <motion.h5>
              2 person room
            </motion.h5>
            </div>
            <div className="information2">
            <motion.h3>
              our cozy two-person room!
              The room features two comfortable beds above each other with a shared bathroom. 
              Whether youre traveling with a friend or a loved one, our small but charming room 
              is the perfect choice for a budget-friendly and intimate stay in our hostel. 
              Enjoy your time here!
            </motion.h3>
            </div>
            </div>
            <div className="imagecontainer">
              <WorkItem2 className="image"/>
            </div>
          </motion.div>
        </div>
    </motion.div>
    </motion.div>
  );
};

export default Sleep1;