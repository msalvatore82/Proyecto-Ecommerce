const { Router } = require("express");
const express = require("express");
const ClientesController = require("../controller/ClientesController");
const router = express.Router();

router.post("/createclientes", ClientesController.createClientes)

module.exports = routeraq12