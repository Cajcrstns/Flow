import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import SampleProject2 from "./components/sampleProject/SampleProject2"
import SampleProject4 from "./components/sampleProject/SampleProject4"
import SampleProject6 from "./components/sampleProject/SampleProject6"
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./pages/Loader/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]); 

  return (
    <>
      <ScrollToTop />
      {loading ? (
        <motion.div key='loader'>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Menu />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<Works />} />
              <Route path="/mindfullness" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/two-person-room" element={<SampleProject2 />} />
              <Route path="/four-person-room" element={<SampleProject4 />} />
              <Route path="/six-person-room" element={<SampleProject6 />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
