const IClient = require("../models/IClient")

class IClientRepository{
  async create({name, email}){return IClient}
  async findOne(idUser) {return IClient}
  async findAll(){return [IClient]}
  async update({id, name, email}){return IClient}
  async delete(idUser){return IClient}
  async findByEmail(email){return IClient}
}

module.exports = IClientRepository