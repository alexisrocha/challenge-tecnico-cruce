import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginaPrincipal from "./PaginaPrincipal";
import { obtenerProductos, eliminarProducto } from "../../redux/actions/index";

export default function PaginaPrincipalContainer() {
  const [boolean, setBoolean] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.losProductos.productos;
  });
  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

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
        handleAdd={handleAdd}
      ></PaginaPrincipal>
    </>
  );
}
