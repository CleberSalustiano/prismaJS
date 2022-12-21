const IProductRepository = require("../interfaces/IProductRepository");

class FakeProductRepository extends IProductRepository{
  products = [];
  contador = 0;

  create({name, value}) {
    const product = {name, value, id: contador};
    this.contador++;
    this.products.push(product);
    return product;
  }
  findOne(idProduct){
    const product = this.products.find(product => product.id === idProduct);
    return product;
  }
  findAll(){
    return this.products;
  }
  update({name, value, id}){
    const productIndex = this.products.findIndex(product => product.id === id);
    const product = this.products[productIndex];
    product.name = name;
    product.value = value;
    this.products.splice(productIndex,1, product);
    return product;
  }
  delete(idProduct){
    const productIndex = this.products.findIndex(product => product.id === idProduct);
    const product = this.products.splice(productIndex, 1);
    return product;
  }
}

module.exports = FakeProductRepository;