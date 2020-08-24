import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginaPrincipal from "./PaginaPrincipal";
import {
  obtenerProductos,
  eliminarProducto,
  editarProducto,
} from "../../redux/actions/index";

export default function PaginaPrincipalContainer() {
  const [boolean, setBoolean] = useState(false);
  const [edit, setEdit] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.losProductos.productos;
  });
  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

  const handleEdit = (id) => {
    const producto = store.filter((element) => element.id === id);
    setname(producto[0].name);
    setprice(producto[0].price);
    setEdit(id);
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "nombre":
        return setNombre(event.target.value);
      case "price":
        return setPrice(event.target.value);
    }
  };
  const handleClick = (id) => {
    dispatch(eliminarProducto(id)).then(() => setBoolean(!boolean));
  };
  const handleAdd = () => {
    setModalShow(true);
  };
  return (
    <>
      <PaginaPrincipal
        productos={store}
        handleClick={handleClick}
        handleEdit={handleEdit}
        edit={edit}
        handleChange={handleChange}
        handleAdd={handleAdd}
      ></PaginaPrincipal>
    </>
  );
}
