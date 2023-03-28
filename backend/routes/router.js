const router = require("express").Router();

// Usuario routes
const servicesRouter = require("./services")
const clientesRouter = require("./clientes");
const refeicoesRouter = require("./refeicoes");
const exerciciosRouter = require("./exercicios");

router.use("/", servicesRouter);
router.use("/", clientesRouter);
router.use("/", refeicoesRouter);
router.use("/", exerciciosRouter);

module.exports = router;