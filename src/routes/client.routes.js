const {Router} = require("express");
const ClientRepository = require("../repositories/ClientRepository")
const ClientService = require("../services/ClientService")

const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get("/", async (request, response) => {
  const users = await clientRepository.findAll();
  return response.send(users)
});

clientRouter.post("/", async (request, response) => {
  try {
    const {name, email} = request.body;
  
    const clientService = new ClientService(clientRepository);
    const user = await clientService.create({name, email});

    return response.send(user);
  } catch (err) {
    return response.status(401).json({error: err.message})
  }

})
module.exports = clientRouter;