const Productos = require("./models");

const TodosLosProductos = [
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 1",
    price: 100.0,
  },
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 2",
    price: 200.0,
  },
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 3",
    price: 300.0,
  },
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 4",
    price: 400.0,
  },
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 5",
    price: 500.0,
  },
  {
    image: "../../../../front/src/imagenes/4048.png",
    name: "Producto 6",
    price: 600.0,
  },
];

Productos.bulkCreate(TodosLosProductos);
