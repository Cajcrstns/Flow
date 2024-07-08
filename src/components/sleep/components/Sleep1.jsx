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
            <div className="imagecontainer">
            <WorkItem className="image"/>
            </div>
            <div className="text">
            <div className="title">
            <motion.h5
            ref={featured}
            animate={animation}
            initial="hidden"
            variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: easeIn },
            },
            hidden: { opacity: 0, y: -50 },
            }}>
              2 person room
            </motion.h5>
            </div>
            <div className="information">
            <motion.h3
            ref={featured}
            animate={animation}
            initial="hidden"
            variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: easeIn },
            },
            hidden: { opacity: 0, y: 30 },
            }}>
              our cozy two-person room!
              The room features two comfortable beds above each other with a shared bathroom. 
              Whether youre traveling with a friend or a loved one, our small but charming room 
              is the perfect choice for a budget-friendly and intimate stay in our hostel. 
              Enjoy your time here!
              <br /><br />
              <Link to="/contact" className="link"><h5>Learn More</h5></Link>
            </motion.h3>
            </div>
            </div>
          </motion.div>
        </div>
    </motion.div>
    </motion.div>
  );
};

export default Sleep1;