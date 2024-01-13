import { CreateProductUseCase } from './create-product'
import { InMemoryProducts } from '../repositories/in-memory/in-memory-products'
import { Product } from '../entities/product'
import { Provider } from '../entities/provider'

let productRepository: InMemoryProducts
let sut: CreateProductUseCase

describe('Create Product', () => {
  beforeEach(() => {
    productRepository = new InMemoryProducts()
    sut = new CreateProductUseCase(productRepository)
  })

  it('should create a product', async () => {

    const {product} = await sut.execute({
      name: 'Product 1',
      color: 'red',
      size: 'M',
      price: 10,
      quantity: 10,
      quantityMin: 5,
      providerId: '123',
    })
    
    expect(product).toBeInstanceOf(Product)
    expect(product.id.toString()).toEqual(expect.any(String))
    expect(product.name).toEqual('Product 1')
      
  })
})
