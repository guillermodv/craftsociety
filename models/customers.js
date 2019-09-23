/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    mercadopago_customer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fb_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(100),
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
    }
  }, {
    tableName: 'customers'
  });
};
