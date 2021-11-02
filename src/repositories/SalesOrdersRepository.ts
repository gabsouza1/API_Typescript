import {
  EntityRepository,
  Repository
} from 'typeorm'

import { SaleOrder } from '../entities/SaleOrder'

@EntityRepository(SaleOrder)
class SalesOrdersRepository extends Repository<SaleOrder> {

}

export { SalesOrdersRepository }