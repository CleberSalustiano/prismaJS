const AlreadyExistError = require("../errors/AlreadyExistError");

class ClientService  {
  constructor (clientRepository) {
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