const prismaClient = require("../database/prismaClient");
const IOrderRepository = require("./interfaces/IOrderRepository");

class OrderRepository extends IOrderRepository {
	async create({ state, idClient }) {
		const order = await prismaClient.order.create({ data: { state, idClient } });
		return order;
	}
	async findOne(id) {
		const order = await prismaClient.order.findFirst({ where: { id }, include: {ProductItem: true} });
		return order;
	}
	async findAll() {
    const orders = await prismaClient.order.findMany();
    return orders;
  }
}

module.exports = OrderRepository;