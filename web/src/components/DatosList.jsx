import { useEffect, useState } from "react";
import { getAllDatos } from "../api/web-api";
/* React-bootstrap */
import Table from "react-bootstrap/Table";
/* import Button from "react-bootstrap/Button"; */

import { RenderDatos } from "./RenderDatos";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


/* Listar Archivos */
export function DatosList() {
  /* guardar primer elemento en datos y actualizar la lista */
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function cargarDatos() {
      try {
        const res = await getAllDatos();
        console.log(res);
        setDatos(res.data);
      } catch (error) {
        console.error("Error al cargar Datos", error);
      }
    }
    cargarDatos();
  }, []);

  return (
    <Table 
    striped bordered hover variant="dark"
    className="tabla_datos"
    >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Editar/Borrar</th>
        </tr>
      </thead>
      {datos.map((dato) => (
        <tbody key={dato.id}>
          <tr>
            <td><RenderDatos dato={dato} /></td>
            <td>{dato.descripcion}</td>
            <td>
              <Button onClick={() =>{
                navigate(`/datos/${dato.id}`);
              }} >
                Accion
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
