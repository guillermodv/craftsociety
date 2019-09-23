/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_subscription_orders', {
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
    subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'subscriptions',
        key: 'id'
      }
    },
    customer_address_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    external_product_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_on_shopify: {
      type: DataTypes.ENUM('pending','success'),
      allowNull: false
    },
    shopify_order_id: {
      type: DataTypes.STRING(255),
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
    tableName: 'customer_subscription_orders'
  });
};
