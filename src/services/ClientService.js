const AlreadyExistError = require("../errors/AlreadyExistError");
const IClientRepository = require ("../repositories/interfaces/IClientRepository")

class ClientService  {
  constructor (clientRepository = new IClientRepository()) {
    this.clientRepository = clientRepository;
  }
  async create({name, email}) {
    if (!email) {
      throw new Error("Não é possível criar um client sem email");
    }
    const existSameEmail = await this.clientRepository.findByEmail(email);

    if (existSameEmail) {
      throw new AlreadyExistError("Não é possível criar um cliente usando um email já existente")
    }

    const client = await this.clientRepository.create({name, email});

    return client;
  }  
}

module.exports = ClientService