import axios from "axios";

const Productos = (TodosLosProductos) => {
  return {
    type: "ALL_PRODUCTS",
    TodosLosProductos,
  };
};

const obtenerProductos = () => {
  return (dispatch) => {
    return axios.get("/api/productos").then((res) => {
      return dispatch(Productos(res.data));
    });
  };
};
const eliminarProducto = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/productos/${id}`);
  };
};

const editarProducto = (id, objeto) => {
  return (dispatch) => {
    return axios.put(`/api/productos/${id}`, objeto);
  };
};

const crearProducto = (objeto) => {
  return (dispatch) => {
    return axios.post("/api/productos", objeto);
  };
};

export { obtenerProductos, eliminarProducto, editarProducto, crearProducto };
