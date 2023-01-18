const IProduct = require("../../models/IProduct")

class IProductRepository {
  async create({name, value}) {return IProduct}
  async findOne(idProduct){return IProduct}
  async findAll(){return [IProduct]}
  async update({name, value, id}){return IProduct}
  async delete(idProduct){return IProduct}
}

module.exports = IProductRepository