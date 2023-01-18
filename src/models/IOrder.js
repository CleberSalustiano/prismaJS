const IClient = require("./IClient");

const IOrder = {
  id: Number(),
  date: Date(),
  state: String(),
  ProductItem: [],
  idClient: Number(),
  client: IClient
}

module.exports = IOrder