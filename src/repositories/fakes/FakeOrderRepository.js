const IOrderRepository = require("../interfaces/IOrderRepository");

class FakeOrderRepository extends IOrderRepository {
  orders = [];
  contador = 0;

  create({state, idClient}){
    const order = {state, idClient, id: this.contador, date: new Date()};
    this.contador++;
    this.orders.push(order);
    return order;
  }
  findOne(id){
    const order = this.orders.find((order) => order.id === id);
    return order;
  }
  findAll(){
    return this.orders;
  }
}

module.exports = FakeOrderRepository;