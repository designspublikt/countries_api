const { Op } = require("sequelize");
const { Country } = require("../database/db");

exports.getAll = (req, res) => {
  Country.findAll()
    .then((response) => {
      res.json({
        status: true,
        message: "Get All Countries",
        response,
        error: "",
      });
    })
    .catch((error) => {
      res.json({
        status: false,
        message: "Error while getting Countries",
        response: [],
        error,
      });
    });
};

exports.getByQuery = (req, res) => {
  let totalPop = 0;
  const { query } = req.params;

  if (query.length < 3) {
    res.json({
      status: true,
      message: "Countries not found with this query",
      response: [],
      error: "",
    });
    return;
  }

  Country.findAll()
    .then((response) => {
      response.forEach(country => {
        totalPop += parseInt(country.dataValues.CountryPopulation);
      });

    })
    .catch((error) => {
      res.json({
        status: false,
        message: "Error while getting Countries",
        response: [],
        error,
      });
    });

  Country.findAll({
    where: {
      CountryName: {
        [Op.like]: "%" + query + "%",
      },
    },
  })
    .then((response) => {
      let completeCountries = [];

      completeCountries = response.map(country => {
        country.dataValues.PopulationPercentage = (parseInt(country.CountryPopulation) * 100) / totalPop;
        return country;
      });

      res.json({
        status: true,
        message: "Get Countries By Query",
        response: completeCountries,
        error: "",
      });
    })
    .catch((error) => {
      res.json({
        status: false,
        message: "Error while getting country by query",
        response: [],
        error,
      });
    });
};
