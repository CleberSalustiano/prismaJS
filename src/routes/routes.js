const userRouter = require("./user.routes")
const {Router} = require("express");
const orderRouter = require("./order.routes");

const router = Router();

router.use("/user", userRouter)
router.use("/order", orderRouter)

module.exports = router;