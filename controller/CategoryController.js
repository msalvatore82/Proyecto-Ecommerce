const { Category, Product } = require("../models/index.js");
const CategoryController = {
  createCategory(req, res) {
    Category.create({ ...req.body })
      .then((product) => {
        res.status(201).send({ msg: "Category create ", Category });
      })
      .catch((error) => {
        console.error(err);
        res.send(err);
      });
  },
  async getCategoryById(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      res.send(category);
    } catch (error) {
      console.error(err);
      res.status(500).send({ msg: "your Category no exist", err });
    }
  },
  async getCategoryByName(req, res) {
    try {
      const category = await Category.findOne({
        where: {
          name: req.params.name,
          },
        },
    );
      res.send(category);
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "your category no exist", error });
    }
  },

  async updateCategoryById(req, res) {
    try {
      await Category.update({name:req.body.name}, {
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
  async destroyCategoryById(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ msg: "Category successfully destroyed." });
    } catch (error) {
      console.error(err);
      res
        .status(500)
        .send({ msg: "There was an error destroying the category.", err });
    }

  },
  async getAllCategorys(req, res) {
    try {
      const category = await Category.findAll({
        include: [{ model: Product, attributes: ["name"]}],
      });
      res.send({ msg: "Your categorys", category });
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error while getting categorys", error });
    }
  }
};

module.exports = CategoryController;
