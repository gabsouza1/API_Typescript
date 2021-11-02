import { getCustomRepository } from 'typeorm'
import { SalesOrdersRepository } from '../repositories/SalesOrdersRepository'

interface ISalesOrdersServiceCreate {
  client_id: string;
  product_id: string;
  amount: number;
  saleDate: Date
}

class SalesOrdersService {

  async create({ client_id, product_id, amount, saleDate }: ISalesOrdersServiceCreate) {
    const salesOrdersServiceRepository = getCustomRepository(SalesOrdersRepository)

    const salesOrders = salesOrdersServiceRepository.create({
      client_id,
      product_id,
      amount,
      saleDate
    })

    await salesOrdersServiceRepository.save(salesOrders)
    return salesOrders
  }

  index() {

  }

}

export { SalesOrdersService }