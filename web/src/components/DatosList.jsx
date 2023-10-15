import { useEffect } from "react";
import { getAllDatos } from "../api/web-api";

export function DatosList() {
  useEffect(() => {
    async function cargarDatos() {
      try {
        const res = await getAllDatos();
        console.log(res);
      } catch (error) {
        console.error("Error al cargar Datos", error);
      }
    }
    cargarDatos();
  }, []);

  return "";
}
