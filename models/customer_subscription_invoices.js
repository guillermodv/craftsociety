/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_subscription_invoices', {
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
    subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mercadopago_invoice_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_modified: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    debit_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_payment_attempt: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: 'customer_subscription_invoices'
  });
};
