import React from "react";
import { Link } from "react-router-dom";
import Blur from "../../plaiceholder/blur";

import ProjectImg2 from "../../../assets/highlights/31.jpg";


const WorkItem2 = ({ index, workName }) => {
  return (
          <Blur
            src={ProjectImg2}
            hash="LEE.w?4TKjXo~6OajuVqbuR*s9r="
            width="100%"
            height="100%"
          />
  );
};

export default WorkItem2;
