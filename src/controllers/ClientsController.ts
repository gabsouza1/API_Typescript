import { Request, Response } from 'express'

import { ClientsServices } from '../services/ClientsServices'

class ClientsController {

  async create(request: Request, response: Response) {
    const { name, telephone, email } = request.body

    const clientsServices = new ClientsServices()

    try {
      const clients = await clientsServices.create({ name, telephone, email })
      return response.json(clients)
    } catch (err) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const clientsServices = new ClientsServices();

    try {
      const clients = await clientsServices.index()
      return response.status(200).json(clients)
    } catch (err: any) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const clientsServices = new ClientsServices();
    const { id } = request.params;

    try {
      const clients = await clientsServices.show({ id })
      return response.status(200).json(clients)
    } catch (err: any) {
      return response
        .status(400)
        .json({ mensagem: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const clientsServices = new ClientsServices();
    const { id } = request.params

    try {
      const clients = await clientsServices.delete({ id })
      return response.json({ message: 'Client excluído com sucesso !!' })
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { name, telephone, email } = request.body
    const { id } = request.params

    const clientsServices = new ClientsServices()

    try {
      const clients = await clientsServices.update({ id, name, telephone, email })
      return response
        .status(200)
        .json(clients)
    } catch (err: any) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ClientsController }