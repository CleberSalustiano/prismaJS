const IProductRepository = require("../interfaces/IProductRepository");

class FakeProductRepository extends IProductRepository{
  create({name, value}) {}
  findOne(idProduct){}
  findAll(){}
  update({name, value, id}){}
  delete(idProduct){}
}

module.exports = FakeProductRepository;