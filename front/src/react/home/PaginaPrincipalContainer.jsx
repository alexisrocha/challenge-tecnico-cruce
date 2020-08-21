import React, { useState, useEffect } from "react";
import PaginaPrincipal from "./PaginaPrincipal";
import { obtenerProductos } from "../../redux/actions/index";
import { connect, useDispatch, useStore, useSelector } from "react-redux";

export default function PaginaPrincipalContainer() {
  const [boolean, setBoolean] = React.useState(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.losProductos.productos;
  });
  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

  return (
    <>
      <PaginaPrincipal productos={store}></PaginaPrincipal>
    </>
  );
}
