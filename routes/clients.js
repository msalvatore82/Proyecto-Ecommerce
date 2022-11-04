const express = require("express");
const ClientController = require("../controller/ClientController");
const router = express.Router();


router.post("/createclient", ClientController.createClient)
router.post("/login", ClientController.login)
router.get("/getClientById/:id", ClientController.getClientById)


module.exports = router

