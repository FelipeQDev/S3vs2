import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function RenderArchivos(archivo) {
  const navigate = useNavigate();
  return (
    <div>
      <p>{archivo.nombre}</p>
      <Button onClick={() => {
        navigate(`/archivos/${archivo.id}`);
      }} ></Button>
    </div>
  );
}

/* onClick={() =>{

}} */