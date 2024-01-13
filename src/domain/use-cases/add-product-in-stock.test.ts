import { Product } from '../entities/product'
import { InMemoryStockRepository } from '../repositories/in-memory/in-memory-stock'
import { AddProductInStockUseCase } from './add-product-in-stock'

let stockRepository: InMemoryStockRepository
let sut: AddProductInStockUseCase

describe('Add Product', () => {
  beforeEach(() => {
    stockRepository = new InMemoryStockRepository()
    sut = new AddProductInStockUseCase(stockRepository)
  })

  it('should be able to add a product in stock', async () => {
    const product1 = Product.create({
      name: 'Product 1',
      color: 'red',
      size: 'M',
      price: 10,
      quantity: 5,
      providerId: '123',
      createdAt: new Date(),
    })

    const product2 = Product.create({
        name: 'Product 2',
        color: 'red',
        size: 'M',
        price: 10,
        quantity: 10,
        providerId: '123',
        createdAt: new Date(),
      })

    const { stock } = await sut.execute({
      name: 'Stock 1',
      products: [
        product1,
      ],
    })
   
    stock.products = product2

    expect(stock.products.length).toBe(2)
    expect(stock.products[0].quantity).toBe(5)
      
  })
})
