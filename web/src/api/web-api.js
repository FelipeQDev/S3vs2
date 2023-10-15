import axios from 'axios'

const infoAPI = axios.create({
    baseURL: "http://localhost:8000/inicio/api/v1/app/"
});


/* Archivos */
export const getAllArchivos = () => {
    return infoAPI.get("/");
};

export const getArchivo = (id) => {
    return infoAPI.get(`${id}/`);
};


/* Datos */

export const getAllDatos = () => {
    return infoAPI.get("/");
};

export const getDato = () => {
    return infoAPI.get(`${id}/`);
};