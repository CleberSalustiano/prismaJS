class OrderService {
  constructor (orderRepository, clientRepository, productItemRepository, productRepository) {
    this.orderRepository = orderRepository;
    this.clientRepository = clientRepository;
    this.productItemRepository = productItemRepository;
    this.productRepository = productRepository
  }

  async create(idClient) {
    const client = await this.clientRepository.findOne(idClient);

    if (!client) {
      throw new Error("Esse cliente não existe")
    }

    const order = await this.orderRepository.create({state: "Não iniciado", idClient});
    
    return order;
  }

  async addProduct({idProduct, idOrder, quantity}) {
    const product = await this.productRepository.findOne(idProduct);

    if (!product) {
      throw new Error("Esse produto não existe")
    }

    const order = await this.orderRepository.findOne(idOrder);
    
    if (!order) {
      throw new Error("Esse pedido não existe")
    }
    
    const productItem = await this.productItemRepository.create({quantity, value: product.value, idProduct, idOrder})

    return productItem
  }
  
}

module.exports = OrderService