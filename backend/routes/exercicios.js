const router = require("express").Router();

//Controllers routes
const exercicioController = require("../controllers/exercicioController");

//Funções
router.route("/").post((req,res) => exercicioController.create(req,res));

module.exports = router;