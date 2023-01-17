class IClientRepository{
  async create({name, email}){}
  async findOne(idUser) {}
  async findAll(){}
  async update({id, name, email}){}
  async delete(idUser){}
  async findByEmail(email){}
}

module.exports = IClientRepository