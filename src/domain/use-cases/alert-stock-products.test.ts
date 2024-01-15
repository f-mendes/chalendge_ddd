import { InMemoryStockRepository } from '../repositories/in-memory/in-memory-stock'
import { AlertStockProductsUseCase } from './alert-stock-products'
import { Product } from '../entities/product'

let stockRepository: InMemoryStockRepository
let sut: AlertStockProductsUseCase

describe('Alert Stock Products', () => {
  beforeEach(() => {
    stockRepository = new InMemoryStockRepository()
    sut = new AlertStockProductsUseCase(stockRepository)
  })

  it('should be able to alert stock products with quantity min', async () => {
    const stock = await stockRepository.create({
      name: 'Stock Principal',
      products: [
        Product.create({
          name: 'Camiseta',
          color: 'azul',
          size: 'M',
          price: 10,
          quantity: 5,
          quantityMin: 3,
          providerId: '1',
          createdAt: new Date(),
        }),

        Product.create({
          name: 'Camiseta 2',
          color: 'preta',
          size: 'M',
          price: 10,
          quantity: 5,
          quantityMin: 5,
          providerId: '1',
          createdAt: new Date(),
        }),

        Product.create({
          name: 'Camiseta 3',
          color: 'vermelha',
          size: 'G',
          price: 10,
          quantity: 4,
          quantityMin: 5,
          providerId: '1',
          createdAt: new Date(),
        }),
      ],
      createdAt: new Date(),
    })

    const response = await sut.execute(stock.id)

    expect(response.message).toBe('There are products with quantity min')
    expect(response.products).toHaveLength(2)
  })
})
