class IProductItemRepository {
  async create({quantity, value, idProduct, idOrder}){}
  async findOne(id){}
  async findAll(){}
}

module.exports = IProductItemRepository