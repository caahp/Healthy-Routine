const router = require("express").Router();

// Usuario routes
const servicesRouter = require("./services")
const clientesRouter = require("./clientes");

router.use("/", servicesRouter);
router.use("/", clientesRouter);

module.exports = router;