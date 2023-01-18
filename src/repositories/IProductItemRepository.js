const IProductItem = require("../../models/IProductItem")

class IProductItemRepository {
  async create({quantity, value, idProduct, idOrder}){return IProductItem}
  async findOne(id){return IProductItem}
  async findAll(){return [IProductItem]}
}

module.exports = IProductItemRepository