const router = require("express").Router();
const countriesController = require("../controllers/countriesController");

router.get("/", countriesController.getAll);
router.get("/query/:query", countriesController.getByQuery);
router.get("/:CountryId", countriesController.getById);

module.exports = router;
