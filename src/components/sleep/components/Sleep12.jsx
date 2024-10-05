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
                  The Rooms
                </motion.h5>
              </div>
              <div className="information">
                <motion.h3>
                  Here we offer our bunk beds which provide a cozy and comfortable sleep
                  each night. Each room is equipped with fresh linens and a small sink which allows you to brush your
                  teeth, freshen up, and wash your face.
                </motion.h3>
              </div>
            </div>
            <div className="imagecontainer">
              <WorkItem className="image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sleep1;