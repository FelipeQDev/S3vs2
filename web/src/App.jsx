import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Bienvenida } from "./pages/Bienvenida";
import { ArchivosPage } from "./pages/ArchivosPage";
import { ArchivosFormPage } from "./pages/ArchivosFormPage";
import { DatosPage } from "./pages/DatosPage";
import { DatosFormPage } from "./pages/DatosFormPage";
import { Navegacion } from "./components/Navegacion";
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <div >
      <BrowserRouter>
      {/* Navegacion entre Rutas*/}
        <Navegacion />
        {/* Rutas Frontend */}
        <Routes>
          <Route path="/" element={<Navigate to="/bienvenida" />} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/archivos" element={<ArchivosPage />} />
          <Route path="/archivos/:id" element={<ArchivosFormPage />} />
          <Route path="/archivos-crear" element={<ArchivosFormPage />} />
          <Route path="/datos" element={<DatosPage />} />
          <Route path="/datos/:id" element={<DatosFormPage />} />
          <Route path="/datos-crear" element={<DatosFormPage />} />
        </Routes>
        {/* Notificaciones Toast */}
        <Toaster />
      </BrowserRouter>
    </div> 
  );
}
