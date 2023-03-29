const router = require("express").Router();

//Controllers routes
const usuarioController = require("../controllers/usuarioController");

//Funções
router.route("/").post((req,res) => usuarioController.create(req,res));

module.exports = router;