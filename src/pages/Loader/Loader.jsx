import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/images/home/logo.png";
import "./Loader.css"

const Loader = ({ setLoading }) => {
    const container = {
        show: {
          transition: { 
            staggerChildren: 0.35,
          },
        },
    };

    const itemMain = {
        hidden: { opacity: 1 },
        show: {
          opacity: 0,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 2
          },
        }
      };

  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div variants={itemMain} className="loader-wrapper">
            <motion.img 
              src={logo}
            />
         </motion.div>
      </motion.div>
    </motion.div>
    );
};

export default Loader;