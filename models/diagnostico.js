'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diagnostico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  diagnostico.init({
    tratamiento: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    empleadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'diagnostico',
  });
  return diagnostico;
};