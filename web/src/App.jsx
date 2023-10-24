import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Bienvenida } from "./pages/Bienvenida"
import { ArchivosPage } from "./pages/ArchivosPage"
import { ArchivosFormPage } from "./pages/ArchivosFormPage"
import { DatosPage } from "./pages/DatosPage"
import { DatosFormPage } from "./pages/DatosFormPage"
import { Navegacion } from "./components/Navegacion"





export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navegacion/>
        <Routes>
          <Route path="/" element={<Navigate to="/bienvenida" />} />
          <Route path="/bienvenida" element={<Bienvenida/>} />
          <Route path="/archivos" element={<ArchivosPage/>} />
          <Route path="/archivos/:id" element={<ArchivosFormPage/>} />
          <Route path="/archivos-crear" element={<ArchivosFormPage/>} />
          <Route path="/datos" element={<DatosPage/>} />
          <Route path="/datos/:id" element={<DatosFormPage/>} />
          <Route path="/datos-crear" element={<DatosFormPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
