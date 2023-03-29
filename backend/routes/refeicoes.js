const router = require("express").Router();

//Controllers routes
const refeicaoController = require("../controllers/refeicaoController");

//Funções
router.route("/").post((req,res) => refeicaoController.create(req,res));

module.exports = router;