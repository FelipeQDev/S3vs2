import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function RenderArchivos(archivo) {
  return (
    <td>
      {archivo.nombre}
    </td>
  );
}
