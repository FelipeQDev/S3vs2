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

export const createArchivo = (formData) => {
  return infoAPI.post("archivos/", formData,{
    headers: {
      'Content-Type':'multipart/form-data'
    }
  });
};

export const deleteArchivo = (id) => {
  return infoAPI.delete(`/archivos/${id}/`);
};

export const updateArchivo = (id, archivo) => {
  return infoAPI.put(`/archivos/${id}`, archivo, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
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
