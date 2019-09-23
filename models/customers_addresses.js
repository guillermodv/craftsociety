/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers_addresses', {
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
    region_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    postcode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    street1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    street2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    floor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apartment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    street_nr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    poi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    identification_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone_number: {
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
    tableName: 'customers_addresses'
  });
};
