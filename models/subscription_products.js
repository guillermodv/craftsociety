/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_products', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'subscriptions',
        key: 'id'
      }
    },
    external_product_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'subscription_products'
  });
};
