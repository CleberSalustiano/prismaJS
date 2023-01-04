const clientRouter = require("./client.routes")
const {Router} = require("express");
const orderRouter = require("./order.routes");

const router = Router();

router.use("/user", clientRouter)
router.use("/order", orderRouter)

module.exports = router;