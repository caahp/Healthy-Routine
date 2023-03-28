const router = require("express").Router();

//Controllers routes
const clienteController = require("../controllers/clienteController");

//Funções
router.route("/clientes").post((req,res) => clienteController.create(req,res));
router.route("/clientes").get((req,res) => clienteController.getAll(req,res));
router.route("/clientes:id").get((req,res) => clienteController.get(req,res));

module.exports = router;