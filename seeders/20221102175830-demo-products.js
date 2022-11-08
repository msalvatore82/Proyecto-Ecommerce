'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
     {  
        name: "producto 1",
        price: 25,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "producto 2",
        price: 20,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "producto 3",
        price: 50,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "producto 4",
        price: 10,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "producto 5",
        price: 8,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "producto 6",
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
