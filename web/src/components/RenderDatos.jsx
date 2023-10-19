import { useNavigate } from "react-router-dom";

export function RenderDatos({ dato }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/datos/${dato.id}`);
      }}
    >
      {dato.nombre}
    </div>
  );
}
