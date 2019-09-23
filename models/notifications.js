/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    external_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mercadopago_customer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'notifications'
  });
};
