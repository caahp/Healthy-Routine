const router = require("express").Router();

//Controllers routes
const clienteController = require("../controllers/clienteController");

//Funções
router.route("/clientes").post((req,res) => clienteController.create(req,res));

module.exports = router;