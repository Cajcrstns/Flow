import React from "react";
import { Link } from "react-router-dom";
import Blur from "../../plaiceholder/blur";

import ProjectImg1 from "../../../assets/highlights/31.jpg";



const WorkItem = ({ index, workName }) => {
  return (
          <Blur
            src={ProjectImg1}
            hash="LUFFa6wbxaWY_NozWqWCRhXAayjY"
            width="100%"
            height="100%"
          />
  );
};

export default WorkItem;
