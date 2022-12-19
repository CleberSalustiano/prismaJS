const prismaClient = require("../database/prismaClient");
const IProductItemRepository = require("./interfaces/IProductItemRepository");

class ProductItemRepository extends IProductItemRepository {
	async create({ quantity, value, idProduct, idOrder }) {
		const productItem = await prismaClient.productItem.create({
			data: { quantity, value, idProduct, idOrder },
		});
		return productItem;
	}
	async findOne(id) {
    const productItem = await prismaClient.productItem.findFirst({where: {id}})
    return productItem;
  }
	async findAll() {
    const productsItem = await prismaClient.productItem.findMany();
    return productsItem;
  }
}

module.exports = ProductItemRepository;
