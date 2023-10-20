import React from "react";
import PropTypes from "prop-types";

import "./cardm.css";


function Cardm({ imageSource}) {
  return (
    
    <div className=" text-center ">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="cardm-img-top cardm" />
      </div>
    

    </div>
  );
}


Cardm.propTypes = {
  imageSource: PropTypes.string
};

export default Cardm;
