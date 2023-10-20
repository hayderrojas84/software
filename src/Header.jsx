import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
          
<div class="container">

  <left><Link class="navbar-brand fw-bold fs-4 " to="presentacion"href="#"><font color="white">POWER HOUSE GYM</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;</left>

  

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                      <Link className="fc" to="inicio"href="#"><font color="white">Informaciòn</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link className="fc" to="fin"href="#"><font color="white">Productos</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link className="fc" to="acerca"href="#"><font color="white">Contacto</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </li>

      </ul>

    </div>
  </div>
 </nav>
</div>
 );
}

export default Navbar;

