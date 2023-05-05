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

exports.getById = (req, res) => {
  const { CountryId } = req.params;

  Country.findByPk()
    .then((response) => {
      res.json({
        status: true,
        message: "Get Country By Id",
        response,
        error: "",
      });
    })
    .catch((error) => {
      res.json({
        status: false,
        message: "Error while getting country by id",
        response: [],
        error,
      });
    });
};

exports.getByQuery = (req, res) => {
  const { query } = req.params;

  Country.findAll({
    where: {
      CountryName: {
        [Op.like]: "%" + query + "%",
      },
    },
  })
    .then((response) => {
      res.json({
        status: true,
        message: "Get Countries By Query",
        response,
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
