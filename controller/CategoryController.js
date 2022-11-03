const { Category } = require("../models/index.js");
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
};

module.exports = CategoryController;
