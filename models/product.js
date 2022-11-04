'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      notNull: { msg: "Please enter a name"},
       }
      },
    price: {
      type: DataTypes.FLOAT,  
      allowNull: false,
      validate: {
      notNull: { msg: "Please enter a price"},
       }
      }, 
    CategoryId: {
      type: DataTypes.INTEGER,  
      allowNull: false,
      validate: {
      notNull: { msg: "Please enter a category"},
       }
      },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};






