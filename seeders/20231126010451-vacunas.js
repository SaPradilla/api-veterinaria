'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vacunas', [
      {
        nombre: "Parvovirosis",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nombre: "Pentavalente ",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nombre: "Rabia",
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        nombre: "Moquillo",
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        nombre: "Adenovirus",
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        nombre: "Traqueobronquitis infecciosa canina ",
        updatedAt: new Date(),
        createdAt: new Date()
      }, {
        nombre: "Leptospira",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vacunas', null, {});
  }
};
