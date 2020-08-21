const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/alexis", {
  dialect: "postgres",
  logging: false,
});

module.exports = db;
