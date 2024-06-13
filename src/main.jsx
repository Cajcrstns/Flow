import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Works />} />
      <Route path="/mindfullness" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/two-person-room" element={<SampleProject2 />} />
      <Route path="/four-person-room" element={<SampleProject4 />} />
      <Route path="/six-person-room" element={<SampleProject6 />} />
    </Routes>
  </Router>
);
