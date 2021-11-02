import { getCustomRepository } from 'typeorm'
import { ProductsRepository } from '../repositories/ProductsRepository'

interface IProductsCreate {
  product: string;
  unitMeasurement: string;
}

interface IProductsID {
  id: string;
}

class ProductsServices {

  async create({ product, unitMeasurement }: IProductsCreate) {

    const productsRepository = getCustomRepository(ProductsRepository)

    const products = await productsRepository.create({
      product,
      unitMeasurement
    })

    await productsRepository.save(products)

    return products
  }

  async index() {
    const productsRepository = getCustomRepository(ProductsRepository);
    const products = await productsRepository.find();
    return products;
  }
}

export { ProductsServices }