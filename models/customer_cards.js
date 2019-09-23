/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_cards', {
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
    mercadopago_card_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    public_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    card_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    luhn_validation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_used: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    card_number_length: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_created: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    first_six_digits: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    last_four_digits: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    security_code_length: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiration_month: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiration_year: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'customer_cards'
  });
};
