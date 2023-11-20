'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mascotas', [{

      nombre: "Wally",
      tipo_mascota: "Gato",
      edad: "7 años",
      raza: "no sabemos",
      genero: "Macho",
      vacunas: "las de siempre",
      clienteId: 1,
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mascotas', null, {});
  }
};
