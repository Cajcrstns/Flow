import React, { useEffect } from "react";
import InfoItem2 from "../images/info2image";
import { motion, useAnimation, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer"



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
              <div className="title2">
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
                  Access
                </motion.h5>
              </div>
              <div className="information2">
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
                  If you arrive by plane: <br />
                  Once you arrive at Schipol and collect your baggage head to the kiosk to buy train tickets. Take the train that stops at Central station in Amsterdam
                  From there it is a 15 minute walk to the boat. We are docked at Oosterdok 4 at the end of the pier, you can also look for the colorful flags and lights and you will easily spot us<br /><br />
                  If you arriving by car:<br />
                  We recommend the best place to park is ‘Parking Center Oosterdok’.
                  From there it is a 10 minute walk to the boat.
                  We are docked at Oosterdok 4 at the end of the pier, you can also look for the colorful flags and
                  lights and you will easily spot us<br />
                </motion.h3>
              </div>
            </div>
            <div className="imagecontainer">
              <InfoItem2 className="image" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sleep1;