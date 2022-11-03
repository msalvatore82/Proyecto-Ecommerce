const client = require("../models/client.js");
const { Product, Category, Sequelize} = require("../models/index.js");
const {Op} = Sequelize

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
  async getProductByName(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });
      res.send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "your product no exist", error });
    }
  },
  async getProductByPrice(req, res) {
    try {
      const product = await Product.findOne({
        where: {
          price: req.params.price
          },
        },
      )
      res.send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "your product no exist", error });
    }  
  },

  async productSortedByPrice(req, res) {
    try {
      const product = await Product.findAll({
        order: [
          ['price', 'ASC']
      ]
        },
      )
      res.send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "your product no exist", error });
    }  
  }
};

module.exports = ProductController;
