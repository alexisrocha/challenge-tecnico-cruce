const objeto = {};
const Productos = require("../models");

objeto.create = (req, res) => {
  Productos.create(req.body)
    .then((productos) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

objeto.find = (req, res) => {
  Productos.findAll().then((productos) => res.status(200).send(productos));
};

objeto.edit = (req, res) => {
  Productos.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

objeto.delete = (req, res) => {
  Productos.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = objeto;
