const prismaClient = require("../database/prismaClient");
const IUserRepository = require("./interfaces/IUserRepository");

class UserRepository extends IUserRepository{
  async create({name, email}) {
    const user = await prismaClient.user.create({data: {name, email}})
    return user;
  }

  async findOne(idUser) {
    const user = await prismaClient.user.findFirst({where: {id: idUser}})
    return user;
  }

  async findAll() {
    const users = await prismaClient.user.findMany()
    return users;
  }

  async update({id, name, email}) {
    const user = await prismaClient.user.update({where: {id}, data: {name, email}})
    return user;
  }

  async delete(idUser) {
    const user = await prismaClient.user.delete({where: {id: idUser}})
    return user;
  }

  async findByEmail(email) {
    const user = await prismaClient.user.findFirst({where: {email}})
    return user;
  }
}

module.exports = UserRepository