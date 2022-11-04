const { Product, Category, Sequelize} = require("../models/index.js");
const {Op} = Sequelize

const ProductController = {
async createProduct(req, res, next) {
  Product.create({ ...req.body })
    .then((product) => {
      product.addOrder(req.body.OrderId)
      res.status(201).send({ msg: "Product create ", product });
    })
    .catch((err) => {
      res.send(err);
      next(err)
      
    });
  },
  // async getAllProducts(req, res) {
  //   try {
  //     const products = await Product.findAll({
  //       include: [{ model: Category, Order, attributes: ["name,id"]}],
  //     });
  //     res.send({ msg: "Your products", products });
  //   } catch (err) {
  //     res.status(500).send({ msg: "Error while getting products", err });
  //   }
  // },

  async updateProductById(req, res) {
    try {
      await Product.update({name:req.body.name}, {
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "successfully upgraded" });
    } catch (err) {
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
    } catch (err) {
      res
        .status(500)
        .send({ msg: "There was an error destroying the product.", err });
    }
  },
  async getProductById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(product);
    } catch (err) {
      res.status(500)
         .send({ msg: "your product no exist", err});
    }
  },
  getProducts(req, res) {
    Product.findAll({ include: [Category] })
      .then((product) => res.send(product))
      .catch((err) => {
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
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "your product no exist", error });
    }  
  }
};

module.exports = ProductController;
