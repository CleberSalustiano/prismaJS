const prismaClient = require("../database/prismaClient");
const IClientRepository = require("./interfaces/IClientRepository");

class ClientRepository extends IClientRepository {
	async create({ name, email }) {
		const user = await prismaClient.client.create({ data: { name, email } });
		return user;
	}

	async findOne(idUser) {
		const user = await prismaClient.client.findFirst({ where: { id: idUser } });
		return user;
	}

	async findAll() {
		const users = await prismaClient.client.findMany();
		return users;
	}

	async update({ id, name, email }) {
		const user = await prismaClient.client.update({
			where: { id },
			data: { name, email },
		});
		return user;
	}

	async delete(idUser) {
		const user = await prismaClient.client.delete({ where: { id: idUser } });
		return user;
	}

	async findByEmail(email) {
		const user = await prismaClient.client.findFirst({ where: { email } });
		return user;
	}
}

module.exports = ClientRepository;
