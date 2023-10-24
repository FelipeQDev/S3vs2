import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { createDato, getDato, deleteDato, updateDato } from "../api/web-api";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
/* React-boostrap */
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function DatosFormPage() {
  const { 
    egister, 
    handleSubmit, 
    setValue } 
    = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateDato(params.id, data);
      toast.success("Dato Actualizado", {
        position: "bottom-center",
        style: {
          borderRadius: "10px",
          background: "#243B55",
          color: "#ffff"
        }
      });
    } else {
      await createDato(data);
      toast.success("Dato Creado", {
        position: "bottom-center",
        style: {
          borderRadius: "10px",
          background: "#243B55",
          color: "#ffff"
        }
      });
    }
    navigate("/datos");
  });
  useEffect(() => {
    async function reflejarDatos() {
      if (params.id) {
        const {
          data: { nombre, descripcion }
        } = await getDato(params.id);
        setValue("nombre", nombre);
        setValue("descripcion", descripcion);
      }
    }
    reflejarDatos();
  }, []);

  return (
    <Container className="my-4">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            id="formdato1"
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
          />
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            id="formdato2"
            type="text"
            placeholder="Descripcion"
            {...register("descripcion", { required: true })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>

        {params.id && (
          <Button
            onClick={async () => {
              const confirmacion = window.confirm("¿Esta Seguro?");
              if (confirmacion) {
                await deleteDato(params.id);
                toast.error("Dato Eliminado", {
                  position: "bottom-center",
                  style: {
                    borderRadius: "10px",
                    background: "#243B55",
                    color: "#ffff"
                  }
                });
              }
              navigate("/datos");
            }}
          >
            Borrar
          </Button>
        )}
      </Form>
    </Container>
  );
}
