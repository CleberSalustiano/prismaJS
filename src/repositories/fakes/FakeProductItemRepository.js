const IProductItemRepository = require("../interfaces/IProductItemRepository");

class FakeProductItemRepository extends IProductItemRepository {
  productItems = [];
  contador = 0;

  create({quantity, value, idProduct, idOrder}){
    const productItem = {quantity, value, idProduct, idOrder, id: contador};
    this.contador++;
    this.productItems.push(productItem);
    return productItem;
  }
  findOne(id){
    const productItem = this.productItems.find(product => product.id === id);
    return productItem
  }
  findAll(){
    return this.productItems;
  }
}

module.exports = FakeProductItemRepository;