import "./App.css";
import Header from "./Header";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fin from "./paginas/fin";
import Acerca from "./paginas/acerca";
import Presentacion from "./paginas/Presentacion";



function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        
        <Routes>

          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Presentacion" element={<Presentacion />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="/fin" element={<Fin />} />
          <Route path="/" element={<Presentacion />} />

        </Routes>
        
      </BrowserRouter>

     </div>
    
  );

}

export default App;
