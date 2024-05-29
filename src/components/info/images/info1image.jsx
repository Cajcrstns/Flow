import React from "react";
import Blur from "../../plaiceholder/blur";

import LinkPreviewImg4 from "../../../assets/images/menu/link-4.jpg";


const InfoItem = ({ index, workName }) => {
  return (
    <div className="info">
      <div className="work-video-info">
        <div className="work-video-wrapper">
          <Blur
            src={LinkPreviewImg4}
            hash="UTF65?NHE2xtyZt7t7RjEmofxZf6spRkNGxt"
            width="100%"
            height="100%"
            />
        </div>
      </div>
      </div>
  );
};

export default InfoItem;
