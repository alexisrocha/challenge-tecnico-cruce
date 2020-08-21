import React from "react";
import { Tarjeta, TarjetaContainer } from "./style.js";

export default function PaginaPrincipal({ productos }) {
  return (
    <div>
      <TarjetaContainer>
        {productos.map((producto) => {
          return (
            <Tarjeta>
              <p>{producto.name}</p>
              <p>{producto.price}</p>
              <img src={producto.image} />
            </Tarjeta>
          );
        })}
      </TarjetaContainer>
    </div>
  );
}
