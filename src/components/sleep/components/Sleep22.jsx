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
                  The Deck
                </motion.h5>
              </div>
              <div className="information2">
                <motion.h3>
                  Welcome to our sunny terrace! Even when the rains come it always feels bright outside. The
                  terrace provides the ideal space to drink your morning coffee, catch some sun rays, enjoy the beautiful
                  sunsets of Amsterdam, or if you’re feeling adventurous take one of our kayaks for a ride through the
                  canals.
                </motion.h3>
              </div>
            </div>
            <div className="imagecontainer">
              <WorkItem2 className="image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sleep1;