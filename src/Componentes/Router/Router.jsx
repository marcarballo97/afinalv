import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "../RutaCuestionario/Materias";

export default function Router() {
    return (
      
      <BrowserRouter>
        <Routes>

          {/*Ruta Cuestionario*/}
         <Route path="/" element={<Materias/>} />
        </Routes>
      </BrowserRouter>
    );
  }