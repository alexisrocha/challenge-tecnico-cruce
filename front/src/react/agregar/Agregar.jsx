import React from "react";
import { Button, Form } from "react-bootstrap";

import "./Agregar.scss";

export default function addModal({ handleSubmit, handleChange, name, price }) {
  return (
    <div>
      <Form onSubmit={(event) => handleSubmit(event)} className="formGroup">
        <Form.Group className="formGroupNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            onChange={handleChange}
            value={name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            name="precio"
            type="text"
            placeholder="Ingrese el precio"
            onChange={handleChange}
            value={price}
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          value={"submit"}
          className="buttonSubmit"
          style={{ color: "#363733" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
