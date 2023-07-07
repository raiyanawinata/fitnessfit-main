const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
  cardnumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expireddate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Payment;
