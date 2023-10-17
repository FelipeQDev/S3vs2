import { useNavigate } from "react-router-dom";

export function RenderDatos({ dato }) {
  const navigate = useNavigate();
  return (
    <div
    onClick={() =>{
      navigate(`/archivos/${archivo.id}`);
    }}
    >
      <p>{dato.nombre}</p>
    </div>
  );
}
