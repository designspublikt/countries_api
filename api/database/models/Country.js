"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {}
  }
  Country.init(
    {
      CountryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CountryName: DataTypes.STRING,
      CountryPopulation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
