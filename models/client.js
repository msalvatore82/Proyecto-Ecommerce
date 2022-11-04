'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
     static associate(models) {
      Client.hasMany(models.Order);
    }
  }
  Client.init({
    name: {
      type: DataTypes.STRING,  
      allowNull: false,
      validate: {
      notNull: { msg: "Please enter a name"},
       }
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "Please enter your email"},
      }
    },
    password: DataTypes.STRING,
    tel: DataTypes.FLOAT,
    direction: DataTypes.STRING,
    role: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};



