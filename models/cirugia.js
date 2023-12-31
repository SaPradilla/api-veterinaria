'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cirugia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M - tiene
      cirugia.belongsTo(models.mascotas,{
        foreignKey:'mascotaId'
      })
      // Relacion N:M
      cirugia.belongsToMany(models.empleado,{
        through:'empleados_cirugia',
        foreignKey:'cirugiaId'
      })
      // M:M
      cirugia.hasMany(models.empleados_cirugia,{
        // atravez de la tabla...
        as:'CirugiasEmpleados',
        foreignKey:'cirugiaId'
      })
      cirugia.belongsTo(models.citas_medica,{
        foreignKey:'cita_medicaId'
      })
    }
  }
  cirugia.init({
    procedimiento: DataTypes.STRING,
    mascotaId: DataTypes.INTEGER,
    cita_medicaId:DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'cirugia',
  });
  return cirugia;
};