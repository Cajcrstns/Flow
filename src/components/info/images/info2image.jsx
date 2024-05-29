import React from "react";
import { Link } from "react-router-dom";
import Blur from "../../plaiceholder/blur";


const InfoItem2 = ({ index, workName }) => {
  return (

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8790088648216!2d4.90856887670045!3d52.37261384713104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6091c86bd645b%3A0x36a6ef44ea64a88d!2sFLOW%20Hostel!5e0!3m2!1snl!2sch!4v1709059072560!5m2!1snl!2sch" 
          width="100%" 
          height="500vw" 
          style={{ border: "0" }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

  );
};

export default InfoItem2;
