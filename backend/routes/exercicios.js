const router = require("express").Router();

//Controllers routes
const exercicioController = require("../controllers/exercicioController");

//Funções
router.route("/exercicios").post((req,res) => exercicioController.create(req,res));

module.exports = router;