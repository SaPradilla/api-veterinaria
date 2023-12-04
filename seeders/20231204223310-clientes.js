'use strict';
const Encrypt = require('../middleware/auth')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
    {

      nombre: "Andrés",
      apellido: "Santiago",
      numero_celular: "312823238",
      email: "pepito123@gmail.com",
      direccion:'',
      contrasena: await Encrypt.cryptPassword('sena1234567'),
      updatedAt:new Date(),
      createdAt:new Date()
    },
    {

      nombre: "Pepito",
      apellido: "Lopez",
      numero_celular: "3131726465",
      email: "lopez@gmail.com",
      direccion:'',
      contrasena: await Encrypt.cryptPassword('sena1234567'),
      updatedAt:new Date(),
      createdAt:new Date()
    },
    {

      nombre: "Andresito",
      apellido: "Garcia",
      numero_celular: "317467855",
      email: "andresito@gmail.com",
      direccion:'',
      contrasena: await Encrypt.cryptPassword('sena1234567'),
      updatedAt:new Date(),
      createdAt:new Date()
    },
    
    {

      nombre: "Jei",
      apellido: "Henao",
      numero_celular: "3128263343",
      email: "henao123@gmail.com",
      direccion:'',
      contrasena: await Encrypt.cryptPassword('sena1234567'),
      updatedAt:new Date(),
      createdAt:new Date()
    },
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
