import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function RenderArchivos(archivo) {
  return (
    <div>
      {archivo.nombre}
    </div>
  );
}
