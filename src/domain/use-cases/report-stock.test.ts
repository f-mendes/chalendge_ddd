import { Product } from '../entities/product'
import { InMemoryStockRepository } from '../repositories/in-memory/in-memory-stock'
import { ReportStockUseCase } from './report-stock'

let stockRepository: InMemoryStockRepository
let sut: ReportStockUseCase

describe('Report Stock', () => {
  beforeEach(() => {
    stockRepository = new InMemoryStockRepository()
    sut = new ReportStockUseCase(stockRepository)
  })

  it('should be able to report stock', async () => {
    const stock = await stockRepository.create({
      name: 'Stock Principal',
      products: [
        Product.create({
          name: 'Camiseta',
          color: 'azul',
          size: 'M',
          price: 10,
          quantity: 5,
          quantityMin: 5,
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
          quantity: 5,
          quantityMin: 5,
          providerId: '1',
          createdAt: new Date(),
        }),
      ],
      createdAt: new Date(),
    })

    const report1 = await sut.execute({ size: 'M' }, stock.id)
    const report2 = await sut.execute({ quantity: 5 }, stock.id)
    const report3 = await sut.execute({ quantity: 8 }, stock.id)
    expect(report1?.length).toBe(2)
    expect(report2?.length).toBe(3)
    expect(report3?.length).toBe(0)
  })
})
