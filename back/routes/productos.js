const express = require("express");
const router = express.Router();
const objeto = require("../controllers/productos");

router.get("/", objeto.find);

router.post("/", objeto.create);

router.put("/:id", objeto.edit);

router.delete("/:id", objeto.delete);

module.exports = router;
