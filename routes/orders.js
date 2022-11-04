const express = require("express");
const OrderController = require("../controller/OrderController");
const router = express.Router();

router.post("/createOrders", OrderController.createOrders)
router.get("/getOrder", OrderController.getOrder)


module.exports = router

