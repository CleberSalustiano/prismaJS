class IProductRepository {
  create({name, value}) {}
  findOne(idProduct){}
  findAll(){}
  update({name, value, id}){}
  delete(idProduct){}
}

module.exports = IProductRepository