'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.hasMany(models.Order);
    }
  }
  Client.init({
    name: {
      type: DataTypes.STRING,  
      allowNull: false,
      validate: {
      notNull: { msg: "Por favor introduce tu nombre"},
       }
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notNull: {msg: "Por favor introduce tu correo"},
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



