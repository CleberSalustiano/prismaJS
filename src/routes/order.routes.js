const { Router } = require("express");
const OrderRepository = require("../repositories/prisma/OrderRepository");
const ProductItemRepository = require("../repositories/prisma/ProductItemRepository");
const ProductRepository = require("../repositories/prisma/ProductRepository");
const ClientRepository = require("../repositories/prisma/ClientRepository");
const OrderService = require("../services/OrderService");

const orderRouter = Router();
const orderRepository = new OrderRepository();
const clientRepository = new ClientRepository();
const productItemRepository = new ProductItemRepository();
const productRepository = new ProductRepository();

orderRouter.get("/", async (req, res) => {
	const orders = await orderRepository.findAll();
	return res.send(orders);
});

orderRouter.get("/:id", async (req, res) => {
  const {id} = req.params;
	const order = await orderRepository.findOne(+id);
	return res.send(order);
});

orderRouter.post("/", async (req, res) => {
  try {
    const {idClient} = req.body;

	const orderService = new OrderService(
		orderRepository,
		clientRepository,
		productItemRepository,
		productRepository
	);

  const order = await orderService.create(idClient);

  return res.send(order);
  }catch (err) {
    return res.status(401).json({error: err.message})
  }
});

orderRouter.post("/item/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const { idProduct, quantity } =  req.body

    const orderService = new OrderService(
      orderRepository,
      clientRepository,
      productItemRepository,
      productRepository
    );

    await orderService.addProduct({idProduct, idOrder: +id, quantity});

    const order = await orderRepository.findOne(+id);

    return res.send(order);
  } catch(err) {
    return res.status(401).json({error: err.message})
  }
})

module.exports = orderRouter;
