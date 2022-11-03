const express = require("express");
const CategoryController = require("../controller/CategoryController");
const router = express.Router();
const {authentication} = require('../middleware/authentication')

router.post("/createCategory", CategoryController.createCategory)
router.get("/getCategoryById/:id", CategoryController.getCategoryById)
router.get("/getCategoryByName/:name", CategoryController.getCategoryByName)



module.exports = router