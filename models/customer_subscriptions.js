/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_subscriptions', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    customer_address_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'customers_addresses',
        key: 'id'
      }
    },
    subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'subscriptions',
        key: 'id'
      }
    },
    mercadopago_subscription_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expired_at: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('preapproval','pending','authorized','active','paused','canceled','cancelled-baja','queued'),
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
    tableName: 'customer_subscriptions'
  });
};
