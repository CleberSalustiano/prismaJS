const IOrder = require("./IOrder");
const IProduct = require("./IProduct");

const IProductItem = {
  id: Number(),
  quantity: Number(),
  value: Number(),
  idProduct: Number(),
  idOrder: Number(),
  order: IOrder,
  product: IProduct
}

module.exports = IProductItem;