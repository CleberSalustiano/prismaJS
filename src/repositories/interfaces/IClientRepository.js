class IClientRepository{
  create({name, email}){}
  findOne(idUser) {}
  findAll(){}
  update({id, name, email}){}
  delete(idUser){}
  findByEmail(email){}
}

module.exports = IClientRepository