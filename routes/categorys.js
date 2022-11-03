const express = require("express");
const CategoryController = require("../controller/CategoryController");
const router = express.Router();
const {authentication} = require('../middleware/authentication')

router.post("/createCategory", CategoryController.createCategory)


module.exports = router