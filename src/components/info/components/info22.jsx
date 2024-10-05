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
                  How to get from Schiphol airport to The Flow: <br />
                  - Once you arrive at Schipol and collect your baggage head to the kiosk to buy train tickets<br />
                  - You will take the train that stops at Centraal station in Amsterdam<br />
                  - From there it is a 15 minute walk to the boat, which you can easily guide yourself with google or apple maps<br />
                  - We are docked at Oosterdok 4 at the end of the pier, you can also look for the colorful flags and lights and you will easily spot us<br /><br />
                  If you arriving by car:<br />
                  - We recommend the best place to park is ‘Parking Center Oosterdok’<br />
                  - From there it is a 10 minute walk to the boat, which you can easily find through google/apple
                  maps<br />
                  - We are docked at Oosterdok 4 at the end of the pier, you can also look for the colorful flags and
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