/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false
    },
    frequency: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    frequency_type: {
      type: DataTypes.ENUM('days','months'),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
			field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
			field: "updated_at"
    },
    plan_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'subscriptions'
  });
};
