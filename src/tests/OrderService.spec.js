const FakeOrderRepository = require("../repositories/fakes/FakeOrderRepository")
const FakeProductRepository = require("../repositories/fakes/FakeProductRepository")
const FakeProductItemRepository = require("../repositories/fakes/FakeProductItemRepository")
const FakeClientRepository = require("../repositories/fakes/FakeClientRepository")
const OrderService = require("../services/OrderService")

describe("Create Order", () => {
  it("deve ser possível criar uma Order",async () => {
    const orderRepository = new FakeOrderRepository();
    const productRepository = new FakeProductRepository();
    const productItemRepository = new FakeProductItemRepository();
    const clientRepository = new FakeClientRepository();

    clientRepository.create({name: "cleber", email: "badaasds@email.com"});
    const client2 = clientRepository.create({name: "cleber", email: "badas@email.com"});

    const orderService = new OrderService(orderRepository, clientRepository, productItemRepository, productRepository);
  
    const order = await orderService.create(client2.id);

    expect(order).toBeTruthy();
    expect(order.idClient).toBe(1);
    expect(order.state).toBe("Não iniciado");
  })

  it("não deve ser possível criar uma order, caso o client não exista",async () => {
    const orderRepository = new FakeOrderRepository();
    const productRepository = new FakeProductRepository();
    const productItemRepository = new FakeProductItemRepository();
    const clientRepository = new FakeClientRepository();

    clientRepository.create({name: "cleber", email: "badaasds@email.com"});
    clientRepository.create({name: "cleber2", email: "badas@email.com"});

    const orderService = new OrderService(orderRepository, clientRepository, productItemRepository, productRepository);
    
    expect(orderService.create(2)).rejects.toBeInstanceOf(Error);
  })
})