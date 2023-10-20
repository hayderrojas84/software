import React from "react";
import Cardm from "./Cardm";

import image1 from "../assetsm/image1.jpeg";
import image2 from '../assetsm/image2.jpeg'
import image4 from '../assetsm/image4.jpeg'
import image5 from '../assetsm/image5.jpeg'
import image6 from '../assetsm/image6.jpeg'
import image7 from '../assetsm/image7.jpg'



const cardsm = [
  {
    id: 1,
    title: "Facebook",
    image: image6,
    
  },
  {
    id: 2,
    title: "Instagram",
    image: image2,
 
  },
  {
    id: 3,
    title: "Youtube",
    image: image7,

  },
  {
    id: 4,
    title: "Youtube",
    image: image4,

  },
  {
    id: 5,
    title: "Youtube",
    image: image5,

  },
  {
    id: 6,
    title: "Youtube",
    image: image1,

  },

];

function Cardsm() {
  return (

      <div className="row">
        {cardsm.map(({ image }) => (
          <div className="col-md-4" >
            <Cardm imageSource={image}  />
          </div>
        ))}
        

        
      
    </div>
  );
}

export default Cardsm;