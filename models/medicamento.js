'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      medicamento.hasMany(models.venta_producto,{
        foreignKey:'medicamentoId'
      })
      // 1:M
      medicamento.hasMany(models.venta_servicio,{
        foreignKey:'servicioId'
      })
      // M:1
      medicamento.belongsTo(models.tipo_producto,{
        foreignKey:'tipo_productoId'
      })
      // 1:1
      medicamento.hasOne(models.producto,{
        foreignKey:'medicamentoId'
      })
    }
  }
  medicamento.init({
    // tipo_medicamento: DataTypes.ENUM('Antibióticos','Antiinflamatorios','Antiparasitario','Nutriente','Juguete','Alimentos','Asesorios','Higiene','Collares'),
    tipo_productoId:DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    unidades: DataTypes.INTEGER,
    volumen: DataTypes.STRING,
    fecha_venciminento: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'medicamento',
  });
  return medicamento;
};