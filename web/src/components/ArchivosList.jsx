import { useEffect, useState } from "react";
import { getAllArchivos } from "../api/web-api";
/* React-bootstrap */
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

import { RenderArchivos } from "./RenderArchivos";


/* Listar Archivos */
export function ArchivosList() {
  /* guardar primer elemento en archivos y actualizar la lista */
  const [archivos, setArchivos] = useState([]);
  useEffect(() => {
    async function cargarArchivos() {
      try {
        const res = await getAllArchivos();
        console.log(res);
        setArchivos(res.data);
      } catch (error) {
        console.error("Error al Cargar Archivos", error);
      }
    }
    cargarArchivos();
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Archivo</th>
          <th>Accion</th>
        </tr>
      </thead>
      {
        archivos.id?.map((archivo) => (
          <tbody key={archivo.id}>
            <tr>
              <td>
                <RenderArchivos archivo={archivo} />
              </td>
              <td>
                <RenderArchivos archivo={archivo} />
              </td>
              <td>
                <Button>Accion</Button>
              </td>
            </tr>
          </tbody>
        ))
      }
    </Table>
  );
}
