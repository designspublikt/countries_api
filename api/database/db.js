const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/database");
const db = {};

db.connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Country = require("./models/Country")(db.connection, DataTypes);

module.exports = db;
