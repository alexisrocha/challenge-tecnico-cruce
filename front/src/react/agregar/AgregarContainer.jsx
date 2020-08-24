import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearProducto } from "../../redux/actions/index";
import Agregar from "./Agregar";

export default function agregarContainer({ history }) {
  const [name, setNombre] = useState("");
  const [price, setPrecio] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case "nombre":
        return setNombre(event.target.value);
      case "precio":
        return setPrecio(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      name: event.target[0].value,
      price: event.target[1].value,
    };
    dispatch(crearProducto(objeto)).then(() => {
      return history.push("/");
    });
  };

  return (
    <Agregar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name}
      price={price}
    ></Agregar>
  );
}
