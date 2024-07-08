import React, { useEffect } from "react";
import WorkItem2 from "../rooms/room4";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom";

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
              4 person room
            </motion.h5>
            </div>
            <div className="information2">
            <motion.h3>
              our cozy four-person room at our hostel! With comfy beds, clean linens, and a warm ambiance, 
              this room is perfect for travelers looking for a comfortable and affordable accommodation. 
              The room is designed to provide a relaxing and peaceful stay, giving you the chance to recharge after a day of exploring.
              Enjoy your stay!
              <br /><br />
              <Link to="/four-person-room" className="link"><h5>Learn More</h5></Link>
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