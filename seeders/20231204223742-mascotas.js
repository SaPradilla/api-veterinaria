'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mascotas', [
      {

      nombre: "Wally",
      tipo_mascota: "Gato",
      edad: "7 años",
      raza: "no sabemos",
      genero: "Macho",
      vacunas: JSON.stringify([
        'Parvovirosis',
        'Pentavalente',
        'Rabia',
        'Moquillo',
        'Adenovirus',
        'Traqueobronquitis infecciosa canina',
        'Leptospira'
      ]),
      clienteId: 1,
      updatedAt:new Date(),
      createdAt:new Date()
    },
    {

      nombre: "Matias",
      tipo_mascota: "Perro",
      edad: "8 años",
      raza: "Pekines",
      genero: "Macho",
      vacunas: JSON.stringify([
        'Parvovirosis',
        'Pentavalente',
        'Rabia',
        'Moquillo',
        'Adenovirus',
        'Traqueobronquitis infecciosa canina',
        'Leptospira'
      ]),
      clienteId: 2,
      updatedAt:new Date(),
      createdAt:new Date()
    },
    {

      nombre: "Lupita",
      tipo_mascota: "Gato",
      edad: "4 años",
      raza: "Mixta",
      genero: "Hembra",
      vacunas: JSON.stringify([
        'Parvovirosis',
        'Pentavalente',
        'Rabia',
        'Moquillo',
        'Adenovirus',
        'Traqueobronquitis infecciosa canina',
        'Leptospira'
      ]),
      clienteId: 3,
      updatedAt:new Date(),
      createdAt:new Date()
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mascotas', null, {});
  }
};
