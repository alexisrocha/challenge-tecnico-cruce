import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import "./styles.scss";

export default function PaginaPrincipal({ productos, handleClick, handleAdd }) {
  console.log(productos);
  return (
    <div>
      <Card className="cardStyle">
        {productos &&
          productos.map((producto) => (
            <div>
              <img variant="top" src={producto.image} className="imgStyle" />
              <Card.Body>
                <Card.Title>ID:{producto.id}</Card.Title>
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
            </div>
          ))}
      </Card>
    </div>
  );
}
