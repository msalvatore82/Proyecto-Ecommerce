const { Router } = require("express");
const express = require("express");
const ClientController = require("../controller/ClientController");
const router = express.Router();

router.post("/createclient", ClientController.createClient)

module.exports = router