import { InMemoryProducts } from '../repositories/in-memory/in-memory-products'
import { TrackProductUseCase } from './track-product'

let productRepository: InMemoryProducts
let sut: TrackProductUseCase

describe('Track Product', () => {
  beforeEach(() => {
    productRepository = new InMemoryProducts()
    sut = new TrackProductUseCase(productRepository)
  })

  it('should be able to track a product by id', async () => {
    const product = await productRepository.create({
      name: 'Product 1',
      color: 'red',
      size: 'M',
      price: 10,
      quantity: 5,
      quantityMin: 5,
      providerId: '123',
      createdAt: new Date(),
    })

    const { product: trackedProduct } = await sut.execute({
      productId: product.id,
    })

    expect(trackedProduct).toEqual(product)
  })
})
