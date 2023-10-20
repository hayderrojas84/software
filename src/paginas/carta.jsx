import cart from "../assetsm/carta.jpg"


const Carta= () => {

  return (
    
<div className="carta"> <br/><br/> 
         
         <h5 className="ph"class="card-title display-3 fw-bolder mb-0"><center><font color="white">Elige tu mejor opción</font><center/></center></h5>
  
       <p class="card-text lead fs-2"> <center><font color="white">¡Al final vas a querer probarlos todos!</font></center></p>
          
         <br/> 
         <div className="cartita"><img alt="b"src= {cart} height="600px" width="600px"  /> </div><br/><br/>
         
         <h5 className="ph"class="card-title display-3 fw-bolder mb-0"><center><font color="white">Servicio a domicilio, ¡contáctanos!</font><center/></center></h5>
         </div>
 
          
  );
};
export default Carta;