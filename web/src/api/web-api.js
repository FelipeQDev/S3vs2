import axios from "axios";

const BASE_URL = "http://localhost:8000/inicio/api/v1";

const infoAPI = axios.create({
  baseURL: BASE_URL
});

/* Archivos */
export const getAllArchivos = () => {
  return infoAPI.get("archivos/");
};

export const getArchivo = (id) => {
  return infoAPI.get(`/archivos/${id}/`);
};

export const createArchivo = (archivo) => {
  return infoAPI.post("archivos/", archivo);
};

export const deleteArchivo = (id) => {
  return infoAPI.delete(`/archivos/${id}/`);
};

export const updateArchivo = (id, archivo) => {
  return infoAPI.put(`/archivos/${id}`, archivo);
};

/* Datos */

export const getAllDatos = () => {
  return infoAPI.get("datos/");
};

export const getDato = () => {
  return infoAPI.get(`/datos/${id}/`);
};

export const createDato = (dato) => {
  return infoAPI.post("datos/", dato);
};

export const deleteDato = (id) => {
  return infoAPI.delete(`/datos/${id}/`);
};

export const updateDato = (id, dato) => {
  return infoAPI.put(`/datos/${id}`, dato);
};
