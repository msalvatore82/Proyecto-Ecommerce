'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
     static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Order,{
        through:models.Basket
      })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "Please enter the product name"},
      }
},
price: {
  type: DataTypes.FLOAT,
  allowNull: false,
  validate: {
  notNull: {msg: "Please enter the price of the product"},
  }
},
CategoryId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: {
  notNull: {msg: "Please enter the product category"},
  }
}
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

