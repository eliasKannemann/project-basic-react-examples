import React from "react";
import { Button, Form } from "react-bootstrap";

function FormTask({ onChange, inputValue, onSubmit, refForm }) {
  return (
    <Form onSubmit={onSubmit} ref={refForm}>
      <Form.Group className="mb-3">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar un titulo"
          onChange={onChange}
          name="title"
          value={inputValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar una url"
          onChange={onChange}
          name="img"
          value={inputValue.img}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as={"textarea"}
          type="text"
          placeholder="Ingresar una description"
          onChange={onChange}
          name="description"
          value={inputValue.description}
        />
      </Form.Group>

      <Button variant="secundary" type="submit" className="mx-2">
        Agregar
      </Button>
      <Button variant="danger" type="reset">
        reset
      </Button>
    </Form>
  );
}

export default FormTask;
