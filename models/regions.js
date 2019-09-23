/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data_code: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    tableName: 'regions'
  });
};
