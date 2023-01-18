const prismaClient = require("../database/prismaClient");
const IProductRepository = require("./interfaces/IProductRepository");

class ProductRepository extends IProductRepository {
	async create({ name, value }) {
		const product = await prismaClient.product.create({
			data: { name, value },
		});
		return product;
	}
	async findOne(idProduct) {
		const product = await prismaClient.product.findFirst({
			where: { id: idProduct },
		});
		return product;
	}
	async findAll() {
		const products = await prismaClient.product.findMany();
		return products;
	}
	async update({ name, value, id }) {
		const product = await prismaClient.product.update({
			data: { name, value },
			where: { id },
		});
		return product;
	}
	async delete(idProduct) {
		const product = await prismaClient.product.delete({
			where: { id: idProduct },
		});
		return product;
	}
}

module.exports = ProductRepository;
