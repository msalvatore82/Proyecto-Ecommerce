const { Product, Category, Sequelize } = require("../models/index.js");
const CategoryController = {
    createCategory(req, res) {
        Category.create({...req.body})
        .then((product)=> {
            res.status(201).send({msg: "Category create ", Category});
        })
        .catch((error)=> {
            console.error(err);
            res.send(err)
        });
    }
};

module.exports = CategoryController
