const router = require("express").Router();

// Usuario routes
const servicesRouter = require("./services")
const clientesRouter = require("./clientes");
const refeicoesRouter = require("./refeicoes");
const exerciciosRouter = require("./exercicios");

router.use("/services", servicesRouter);
router.use("/clientes", clientesRouter);
router.use("/refeicoes", refeicoesRouter);
router.use("/exercicios", exerciciosRouter);

module.exports = router;