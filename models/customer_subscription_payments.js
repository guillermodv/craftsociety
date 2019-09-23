/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_subscription_payments', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mercadopago_payment_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    tableName: 'customer_subscription_payments'
  });
};
