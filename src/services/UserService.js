const AlreadyExistError = require("../errors/AlreadyExistError");

class UserService {
  constructor (userRepository) {
    this.userRepository = userRepository;
  }
  async create({name, email}) {
    if (!email) {
      throw new Error("Não é possível criar um usuário sem email");
    }
    const existSameEmail = await this.userRepository.findByEmail(email);

    if (existSameEmail) {
      throw new AlreadyExistError("Não é possível criar um usuário usando um email já existente")
    }

    const user = await this.userRepository.create({name, email});

    return user;
  }
}

module.exports = UserService