const express = require("express");
const ClientController = require("../controller/ClientController");
const router = express.Router();
const {authentication} = require('../middleware/authentication');


router.post("/createclient", ClientController.createClient)
router.post("/login", ClientController.login)
router.get("/getClientById/:id", ClientController.getClientById)
router.get('/confirm/:emailToken',ClientController.confirm)


router.delete('/logout',authentication,ClientController.logout)

module.exports = router

