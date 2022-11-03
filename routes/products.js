const express = require("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();

router.post("/createProduct", ProductController.createProduct)
router.get("/getAllProducts",ProductController.getAllProducts)
router.put("/updateProductById/:id", ProductController.updateProductById)
router.delete("/destroyProductById/:id",ProductController.destroyProductById)
router.get("/productById/:id", ProductController.getProductById)
router.get("/products", ProductController.getProducts)


module.exports = router

