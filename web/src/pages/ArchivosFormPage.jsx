import {
  createArchivo,
  getArchivo,
  deleteArchivo,
  updateArchivo
} from "../api/web-api";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
/* React-bootstrap */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function ArchivosFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function reflejarArchivos() {
      try {
        if (params.id) {
          const {
            data: { nombre, archivo }
          } = await getArchivo(params.id);
          setValue("nombre", nombre);
          setValue("archivo", archivo);
        }
      } catch (error) {
        console.error("error al obtener arhicovs", error);
      }
    }
    reflejarArchivos();
  }, [params.id]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("archivo", data.archivo[0]);
    try {
      if (params.id) {
        await updateArchivo(params.id, data);
        toast.success("Archivo Actualizado", {
          position: "bottom-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff"
          }
        });
      } else {
        await createArchivo(formData);
        toast.success("Archivo Creado", {
          position: "bottom-center",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff"
          }
        });
      }
    } catch (error) {
      console.error("Error en handleSubmit:", error, data);
    }
    navigate("/archivos");
  });

  return (
    <Form onSubmit={onSubmit} encType="multipart/form-data">
      <Form.Group className="mb-3">
        {errors.nombre && (
          <span>
            <b>Requiere un Nombre</b>
          </span>
        )}

          <Form.Control
            className="formarch1"
            type="text"
            {...register("nombre", { required: true })}
          />
          {errors.archivo && (
            <span>
              <b>Necesita seleccionar un Archivo</b>
            </span>
          )}
          <Form.Control
            className="formarch2"
            type="file"
            {...register("archivo", { touched: true })}
          />
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        {params.id && (
          <Button
            id="botonborrar"
            onClick={async () => {
              const confirmacion = window.confirm("Desea Eliminarlo?");
              if (confirmacion) {
                await deleteArchivo(params.id);
                toast.error("Archivo Eliminado", {
                  position: "bottom-center",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff"
                  }
                });
              }
              navigate("/archivos");
            }}
          >
            Borrar
          </Button>
        )}
      </Form.Group>
    </Form>
  );
}
