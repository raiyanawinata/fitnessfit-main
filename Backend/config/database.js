const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'fitnessdb',
  'root',
  '', {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
