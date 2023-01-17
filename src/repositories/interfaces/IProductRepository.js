class IProductRepository {
  async create({name, value}) {}
  async findOne(idProduct){}
  async findAll(){}
  async update({name, value, id}){}
  async delete(idProduct){}
}

module.exports = IProductRepository