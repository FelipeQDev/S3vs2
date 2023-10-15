import { useEffect } from "react";
import { getAllArchivos } from "../api/web-api";

export function ArchivosList() {
  useEffect(() => {
    async function cargarArchivos() {
      try {
        const res = await getAllArchivos();
        console.log(res);
      } catch (error) {
        console.error("Error al Cargar Archivos", error);
      }
    }
    cargarArchivos();
  });
  return "";
}
