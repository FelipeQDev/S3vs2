import {
  createArchivo,
  getArchivo,
  deleteArchivo,
  updateArchivo
} from "../api/web-api";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
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

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateArchivo(params.id, data);
      toast.success(
        ("Archivo Actualizado",
        {
          position: "bottom-right",
          style: {
            borderRadius: "10px",
            background: "#243B55",
            color: "#ffff"
          }
        })
      );
    } else {
      await createArchivo(data);
      toast.success("Archivo Creado", {
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#243B55",
          color: "#ffff"
        }
      });
    }
    navigate("/archivos");
  });

  useEffect(() => {
    async function reflejarArchivos() {
      if (params.id) {
        const {
          data: { nombre, archivo }
        } = await getArchivo(params.id);
        setValue("nombre", nombre);
        setValue("archivo", archivo);
      }
    }
    reflejarArchivos();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre del Archivo</Form.Label>
        <Form.Control type="text" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Requiere un Nombre</span>}
        <Form.Label>Seleccione el Archivo</Form.Label>
        <Form.Control type="file" {...register("nombre", { required: true })} />
        <Button variant="primary" type="submit">
          Guardar
        </Button>
        {errors.archivo && <span>Necesita seleccionar un Archivo</span>}
        {params.id && (
          <Button
            onClick={async () => {
              const confirmacion = window.confirm("Desea Eliminarlo?");
              if (confirmacion) {
                await deleteArchivo(params.id);
                toast.error("Archivo Eliminado", {
                  position: "bottom=right",
                  style: {
                    borderRadius: "10px",
                    background: "#243B55",
                    color: "#ffff"
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
