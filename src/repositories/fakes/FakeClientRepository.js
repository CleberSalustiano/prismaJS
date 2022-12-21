const IClientRepository = require("../interfaces/IClientRepository");

class FakeClientRepository extends IClientRepository{
  users = []
  contador = 0

  create({name, email}){
    const user = {name, email, id: this.contador};
    this.contador++;
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email) {
    const user = this.users.find((user) => user.email === email)
    return user;
  }
  
  delete(idUser) {
    const userIndex = this.users.findIndex(user => user.id === idUser);
    
    if (userIndex === -1) 
      throw new Error("Esse usuário não existe");

    const user = this.users.splice(userIndex,1);

    return user;
  }

  update({id, name, email}){
    const userIndex = this.users.findIndex(user => user.id === id);
    const user = this.users[userIndex];
    user.name = name;
    user.email = email;
    this.users.splice(userIndex, 1, user);
    return user;
  }
}

module.exports = FakeClientRepository;