import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Navbar from "../navbar/Navbar";

import "./styles.scss";

export default function PaginaPrincipal({
  productos,
  handleClick,
  handleAdd,
  edit,
  handleChange,
}) {
  return (
    <div>
      <Navbar />
      <Card className="cardStyle">
        {productos &&
          productos.map((producto) => {
            <div>
              <img variant="top" src={producto.image} className="imgStyle" />
              <Card.Body>
                <Card.Title>
                  ID:
                  {producto.id !== edit ? (
                    producto.id
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        id="standard-basic"
                        label="Nombre"
                        type="text"
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}
                      />

                      <button type="submit" className="buttonCheck">
                        <CheckIcon fontSize="small" />
                      </button>
                    </form>
                  )}
                </Card.Title>
                <Card.Title>Nombre: {producto.name}</Card.Title>
                <Card.Text>Precio: ${producto.price}</Card.Text>
                <Button variant="primary" size="sm">
                  <Link
                    to="/agregar"
                    style={{ color: "white" }}
                    className="linkAgregar"
                    onClick={handleAdd}
                  >
                    Agregar producto
                  </Link>
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  style={{ paddingRight: "3px" }}
                  onClick={() => handleEdit(producto.id)}
                >
                  Editar un producto
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ paddingRight: "9px" }}
                  onClick={() => handleClick(producto.id)}
                >
                  Eliminar producto
                </Button>
              </Card.Body>
            </div>;
          })}
      </Card>
    </div>
  );
}
