import Cardsm from "../componentsm/Cardsm";
import { Link } from "react-router-dom";
const Fin = () => {

  return (
    <section>
<br/> 
  <h8 className="h8"><center>Manejamos variedad en sabores</center></h8>

       <p class="card-text lead fs-2"><center><font color="white">¡¡Pruébalos, te van a encantar!!</font></center></p>
       <br/> 
       
              <Cardsm />
              
              <Link className="fa"to="/carta"href="#"> <center><font color="white">Encuentra nuestra carta presionando click aquí</font></center></Link>&nbsp;&nbsp;
    </section>
          
  );
};
export default Fin;

