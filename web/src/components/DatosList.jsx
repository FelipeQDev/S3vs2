import { useEffect, useState } from "react";
import { getAllDatos } from "../api/web-api";
/* React-bootstrap */
import Table from "react-bootstrap/Table";
/* import Button from "react-bootstrap/Button"; */

import { RenderDatos } from "./RenderDatos";


/* Listar Archivos */
export function DatosList() {
  /* guardar primer elemento en datos y actualizar la lista */
  const [datos, setDatos] = useState([]);
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      {datos.map((dato) => (
        <tbody key={dato.id}>
          <tr>
            <td><RenderDatos dato={dato} /></td>
            <td>{dato.descripcion}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
