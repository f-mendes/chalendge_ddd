import { InMemoryProducts } from "../repositories/in-memory/in-memory-products"
import { UpdateProductUseCase } from "./update-product"


let productRepository: InMemoryProducts
let sut: UpdateProductUseCase

describe('Update Product', () => {
  beforeEach(() => {
    productRepository = new InMemoryProducts()
    sut = new UpdateProductUseCase(productRepository)
  })

  it('should be able to update a product by id', async () => {
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

    const { product: updatedProduct } = await sut.execute({
      color: 'blue',
      size: 'G',
      quantity: 10,
    }, product.id)

    expect(updatedProduct?.color).toEqual('blue')
    expect(updatedProduct?.size).toEqual('G')
    expect(updatedProduct?.quantity).toEqual(10)
  })
})