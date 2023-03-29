const router = require("express").Router();

//Controllers routes
const clienteController = require("../controllers/clienteController");

//Funções
router.route("/").post((req,res) => clienteController.create(req,res));
router.route("/").get((req,res) => clienteController.getAll(req,res));
router.route("/:id").get((req,res) => clienteController.get(req,res));

module.exports = router;