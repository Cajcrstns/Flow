import React, { useEffect } from "react";
import WorkItem from "../rooms/room2";
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
            <div className="title">
            <motion.h5>
              6 person room
            </motion.h5>
            </div>
            <div className="information">
            <motion.h3>
              Welcome to our cozy six-person room at our hostel! 
              This compact yet comfortable space is designed to provide a relaxing and affordable stay for small groups. 
              Equipped with all the essential amenities, including comfortable beds and private toilet, 
              the room ensures a convenient and enjoyable experience during your time with us.
              <br /><br />
              <Link to="/six-person-room" className="link"><h5>Learn More</h5></Link>
            </motion.h3>
            </div>
            </div>
            <div className="imagecontainer">
              <WorkItem className="image"/>
            </div>
          </motion.div>
        </div>
    </motion.div>
    </motion.div>
  );
};

export default Sleep1;