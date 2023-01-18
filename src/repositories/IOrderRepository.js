const IOrder = require("../../models/IOrder")

class IOrderRepository {
  async create({state, idClient}){return IOrder}
  async findOne(id){return IOrder}
  async findAll(){return [IOrder]}
}

module.exports = IOrderRepository