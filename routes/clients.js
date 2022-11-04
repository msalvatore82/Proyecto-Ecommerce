const express = require("express");
const ClientController = require("../controller/ClientController");
const router = express.Router();
const {authentication} = require('../middleware/authentication');


router.post("/createclient", ClientController.createClient)
router.post("/login", ClientController.login)
router.get("/getClientById/:id", ClientController.getClientById)

router.delete('/logout',authentication,ClientController.logout)

module.exports = router

