import { useNavigate } from "react-router-dom";

export function RenderDatos({ dato }) {
  const navigate = useNavigate();
  return (
    <td
      onClick={() => {
        navigate(`/datos/${dato.id}`);
      }}
    >
      {dato.nombre}
    </td>
  );
}
