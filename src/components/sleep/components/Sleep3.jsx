import React, { useEffect } from "react";
import WorkItem3 from "../rooms/room6";
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
              <WorkItem3 className="image" />
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
                  The Lounge
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
                  Here in our lounge you can sit back and relax with a cold beverage from our fridge which is
                  filled with all tasty drinks, read a book from our communal book swap shelf, play some music with our
                  instruments on board, or meet some new friends through playing one of our board games.
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