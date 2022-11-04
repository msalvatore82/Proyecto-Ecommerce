const express = require("express");
const ProductController = require("../controller/ProductController");
const router = express.Router();
const {authentication} = require('../middleware/authentication');


router.post("/createProduct", ProductController.createProduct)
// router.get("/getAllProducts",ProductController.getAllProducts)
router.put("/updateProductById/:id",authentication, ProductController.updateProductById)
router.delete("/destroyProductById/:id",authentication, ProductController.destroyProductById)
router.get("/productById/:id", ProductController.getProductById)
router.get("/products", ProductController.getProducts)
router.get("/getProductByName/:name", ProductController.getProductByName)
router.get("/getProductByPrice/:price", ProductController.getProductByPrice)
router.get("/productSortedByPrice", ProductController.productSortedByPrice)
    




module.exports = router

