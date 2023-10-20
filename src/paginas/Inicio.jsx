import React from "react";
const postre="https://cdn-icons-png.flaticon.com/512/2488/2488632.png"
const crema="https://www.nestleprofessional-latam.com/sites/default/files/styles/product/public/media/nestle-crema-de-leche-12x1l-co.png?itok=9YJMozAt"

const About= () => {
    return (
        <div className="hero">

<br/> <br/> 
<section class="cd-intro">
   <h1 class="cd-headline rotate-1">
      <span class="cd-words-wrapper">
         <b class="is-visible">Ubicados en la ciudad de Mocoa</b>
      </span>
   </h1>
</section>
<br/> 
<section class="cd-intro">
   <h1 class="cd-headline rotate">
      <span class="cd-words-wrapper">
         <b class="is-visible">Especificamente en el barrio Olimpico</b>
      </span>
   </h1>
</section> 

  <div class="container">
    <div className="imagen1">
        <img alt="a"src={postre} height="290px" width="290px"/>
    
        
        <h5 class="card-title display-3 fw-bolder mb-0"> <center><font color="white">¡Nuestros productos son realizados con fruta 100% natural!</font></center>
  </h5> <br/> 
        <p class="card-text lead fs-2"> <center><font color="white">Adicional a la fruta usamos otros artículos como:</font></center></p>
        <p class="card-text lead fs-2"> <center><font color="white">Crema de leche - Lechera - Chocolate</font></center></p>
         
        <div className="imagen1">
        <img alt="a" src={crema} height="150px" width="150px"/>
      </div>
      </div>
  </div>
  
</div>



       
            );
        }
        
        export default About;