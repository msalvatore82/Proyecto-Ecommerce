const { Product, Category} = require("../models/index.js");


const ProductController = {
async createProduct(req, res) {
  Product.create({ ...req.body })
    .then((product) => {
      res.status(201).send({ msg: "Product create ", product });
    })
    .catch((error) => {
      console.error(err);
      res.send(err);
    });
  },
  async updateProductById(req, res) {
    try {
      await Product.update({name:req.body.name}, {
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "successfully upgraded" });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "There was an error updating the product.", err });
    }
  },
  async destroyProductById(req, res) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Product successfully destroyed." });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "There was an error destroying the product.", err });
    }
  },
  async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(product);
    } catch (error) {
      console.error(err);
      res.status(500)
         .send({ msg: "your product no exist", err});
    }
  },
  getProducts(req, res) {
    // Post.findAll({ include: [{ model: User, attributes: ["name"] }] })
    Product.findAll({ include: [Category] })
      .then((product) => res.send(product))
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  },
 
};

module.exports = ProductController;
