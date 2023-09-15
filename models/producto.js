'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      producto.belongsTo(models.medicamento,{
        foreignKey:'medicamentoId'
      })
      producto.belongsTo(models.accesorio,{
        foreignKey:'accesorioId'
      })
    }
  }
  producto.init({
    medicamentoId: DataTypes.INTEGER,
    accesorioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};