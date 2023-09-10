'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historias_clinicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perfil_mascotaId: {
        type: Sequelize.INTEGER,
        references:{
          model:'perfil_mascota',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      antecedentes_medicos: {
        type: Sequelize.STRING
      },
      lesiones: {
        type: Sequelize.STRING
      },
      patologias_vigentes: {
        type: Sequelize.STRING
      },
      patologias_superadas: {
        type: Sequelize.STRING
      },
      estado_nutricional: {
        type: Sequelize.STRING
      },
      historial_comportamiento: {
        type: Sequelize.STRING
      },
      isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historias_clinicas');
  }
};