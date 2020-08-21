const Sequelize = require("sequelize");
const db = require("../config/db");
class Productos extends Sequelize.Model {}

Productos.init(
  {
    name: {
      type: Sequelize.STRING,
      required: true,
    },
    price: {
      type: Sequelize.INTEGER,
      required: true,
    },
    image: {
      type: Sequelize.STRING,
      required: true,
    },
  },
  { sequelize: db, modelName: "productos" }
);

module.exports = Productos;
