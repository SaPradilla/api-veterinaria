'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class solicitud_cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //
      solicitud_cita.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      solicitud_cita.belongsTo(models.servicio,{
        foreignKey:'tipo_cita'
      })
    }
  }
  solicitud_cita.init({
    clienteId: DataTypes.INTEGER,
    tipo_cita: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    isAprobada:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'solicitud_cita',
  });
  return solicitud_cita;
};