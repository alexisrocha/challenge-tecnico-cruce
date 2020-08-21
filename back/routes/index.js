const express = require("express");
const router = express.Router();
const productos = require("./productos");

router.use("/productos", productos);

module.exports = router;
