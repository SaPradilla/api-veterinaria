'use strict';
const Encrypt = require('../middleware/auth')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empleados', [{

      nombre: "Andrés",
      apellido: "Lopez",
      numero_celular: "312823238",
      direccion: "casa1#17",
      email: "andres@correo.com",
      rol: "Médico",
      isAdmin:true,
      contrasena: await Encrypt.cryptPassword('andres12345'),
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Laura",
      apellido: "Garcia",
      numero_celular: "3182298372",
      direccion: "cll 20 - #39-34",
      email: "laurita@correo.com",
      rol: "Recepcionista",
      contrasena: await Encrypt.cryptPassword('laurita1'),
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Alexis",
      apellido: "Vazques",
      numero_celular: "312833636",
      direccion: "cll 20 - #39-34",
      email: "alexis123@correo.com",
      rol: "Auxiliar",
      contrasena: await Encrypt.cryptPassword('aleva123'),
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('empleados', null, {});
  }
};
