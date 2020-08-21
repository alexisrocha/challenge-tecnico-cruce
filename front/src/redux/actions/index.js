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

export { obtenerProductos };
