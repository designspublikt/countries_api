"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Countries",
      [
        { CountryName: "India", CountryPopulation: "1409902000" },
        { CountryName: "China", CountryPopulation: "1403426000" },
        { CountryName: "Estados Unidos", CountryPopulation: "331800000" },
        { CountryName: "Indonesia", CountryPopulation: "271629000" },
        { CountryName: "Pakistan", CountryPopulation: "224654000" },
        { CountryName: "Nigeria", CountryPopulation: "219743000" },
        { CountryName: "Brasil", CountryPopulation: "211420000" },
        { CountryName: "Banglades", CountryPopulation: "181781000" },
        { CountryName: "Rusia", CountryPopulation: "146712000" },
        { CountryName: "Mexico", CountryPopulation: "127792000" },
        { CountryName: "Japon", CountryPopulation: "126045000" },
        { CountryName: "Filipinas", CountryPopulation: "108772000" },
        { CountryName: "Egipto", CountryPopulation: "101000000" },
        { CountryName: "Etiopia", CountryPopulation: "100882000" },
        { CountryName: "Vietnam", CountryPopulation: "97591000" },
        { CountryName: "Republica de Congo", CountryPopulation: "89561000" },
        { CountryName: "Iran", CountryPopulation: "83914000" },
        { CountryName: "Turquia", CountryPopulation: "83752000" },
        { CountryName: "Alemania", CountryPopulation: "83421000" },
        { CountryName: "Tailandia", CountryPopulation: "68232000" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Countries", null, {});
  },
};
