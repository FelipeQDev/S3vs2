import axios from "axios";

const BASE_URL = "http://localhost:8000/inicio/api/v1";

const infoAPI = axios.create({
  baseURL: BASE_URL
});

/* Archivos */
export const getAllArchivos = () => infoAPI.get("archivos/");


export const getArchivo = (id) => infoAPI.get(`/archivos/${id}/`);


export const createArchivo = (archivo) => infoAPI.post("archivos/", archivo);


export const deleteArchivo = (id) => infoAPI.delete(`/archivos/${id}/`);

export const updateArchivo = (id, archivo) => infoAPI.put(`/archivos/${id}`, archivo);

/* Datos */

export const getAllDatos = () => infoAPI.get("datos/");

export const getDato = () => infoAPI.get(`/datos/${id}/`);

export const createDato = (dato) => infoAPI.post("datos/", dato);
  
export const deleteDato = (id) => infoAPI.delete(`/datos/${id}/`);
  
export const updateDato = (id, dato) => infoAPI.put(`/datos/${id}`, dato);
