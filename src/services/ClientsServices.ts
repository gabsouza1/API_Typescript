import { getCustomRepository } from 'typeorm'
import { ClientsRepository } from '../repositories/ClientsRepository'

interface IClientsCreate {
  name: string;
  telephone: string;
  email: string;
}

interface IClientsID {
  id: string;
}

interface IClientsUpdate {
  id: string;
  name: string;
  telephone: string;
  email: string;
}

class ClientsServices {

  async create({ name, telephone, email }: IClientsCreate) {

    const clientsRepository = getCustomRepository(ClientsRepository)

    const emailAlreadyExist = await clientsRepository.findOne({ email })

    if (emailAlreadyExist) {
      throw new Error('Email já existente !!!')
    }

    const clients = await clientsRepository.create({
      name,
      telephone,
      email
    })

    await clientsRepository.save(clients)

    return clients
  }

  async index() {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const clients = await clientsRepository.find();
    return clients;
  }

  async show({ id }: IClientsID) {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const clients = clientsRepository.findOne({ id })
    return clients
  }

  async delete({ id }: IClientsID) {
    const clientsRepository = getCustomRepository(ClientsRepository);

    let clients = await clientsRepository.findOne({ id })

    if (!clients) {
      throw new Error('Cliente não encontrado !!')
    }

    return await clientsRepository.delete({ id })
  }

  async update({ id, name, telephone, email }: IClientsUpdate) {
    const clientsRepository = getCustomRepository(ClientsRepository);

    // pesquisar o cliente pelo id
    let clients = await clientsRepository.findOne({ id })

    // se o id não existir retornar a mensagem Cliente não encontrado
    if (!clients) {
      throw new Error('Cliente não encontrado')
    }

    // Alterar os dados utilizando o método update (passar o id e um objeto contendo
    // nome, telefone e email)
    await clientsRepository.update(id, {
      name,
      telephone,
      email
    })

    // pesquisar o cliente pelo id
    clients = await clientsRepository.findOne({ id })

    // retornar um objeto
    return clients






  }



}

export { ClientsServices }