import React from "react";
import { Link } from "react-router-dom";
import Blur from "../../plaiceholder/blur";

import ProjectImg3 from "../../../assets/images/projects/project-32.jpg";


const WorkItem3 = ({ index, workName }) => {
  return (
          <Blur
            src={ProjectImg3}
            hash="LGF;~G^Q~W4nrB$K$%t7Ekjbbcoy"
            width="100%"
            height="100%"
          />
  );
};

export default WorkItem3;
