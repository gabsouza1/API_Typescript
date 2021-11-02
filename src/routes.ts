import { Router } from 'express'

// PascalCase
import { ClientsController } from './controllers/ClientsController'
import { SalesOrdersController } from './controllers/SalesOrdersController'

const routes = Router()

// CamelCase 
const clientsController = new ClientsController()
const salesOrdersController = new SalesOrdersController()

routes.post('/clients', clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.delete('/clients/:id', clientsController.delete)
routes.put('/clients/:id', clientsController.update)

routes.post('/salesorders', salesOrdersController.create)
routes.get('/salesorders', salesOrdersController.index)

export { routes }