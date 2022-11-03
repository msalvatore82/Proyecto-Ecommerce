'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
     {  
        name: "Bolas Chinas",
        price: 25,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Succionador",
        price: 20,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Bomba de vacio",
        price: 50,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Masturbador",
        price: 10,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Lucbricante de sabores",
        price: 8,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "limpiador + Lubricante",
        price: 9,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
          
      ])
  },

  async down (queryInterface, Sequelize) {
  }
};
