const Redes = () => {
    
  const instagram="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram.png"

  const facebook="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"

  const whatsapp="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
  const mere="https://i.pinimg.com/originals/a5/fa/6e/a5fa6e1127a3fef4b7654c98b1090697.png"
  
  return (
      <div className="imagenh">

         <br/> 
         

 <br/>  <h12 className="x">Contáctanos a través de nuestras redes sociales</h12>
         <br/> 


      <a className="face" href="https://www.facebook.com/profile.php?id=100049350886934"> <img alt="f"src={facebook} height="200px" width="200px"/> </a>  &nbsp; &nbsp; &nbsp; &nbsp; 
      
      <a className="face" href="https://instagram.com/merengonespietys?igshid=YmMyMTA2M2Y="><img alt="f"src={instagram} height="200px" width="200px"/> </a> &nbsp; &nbsp; &nbsp; &nbsp; 

      <a className="face" href="https://wa.me/573114026317"><img alt="f"src={whatsapp} height="200px" width="200px" /> </a> &nbsp; &nbsp; &nbsp; &nbsp;
 
 
      <br/> <br/>
      <p class="card-text lead fs-2"> <center><font color="white">¡¡Siguénos y apoya nuestro emprendimiento!!</font></center></p>

         
      <div className="imagen123456">
        <img alt="o" src={mere} height="300px" width="250px"/>
      </div>
  </div>
  );
};
export default Redes;