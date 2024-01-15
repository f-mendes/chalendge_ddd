import { Product, ProductProps } from '@/domain/entities/product'
import { ProductRepository } from '../product-repository'
import { UniqueEntityID } from '@/core/unique-entity-id'

export class InMemoryProducts implements ProductRepository {
  public products: Product[] = []

  async create(data: ProductProps) {
    const product = Product.create(data)

    this.products.push(product)

    return product
  }

  async findById(id: UniqueEntityID) {
    const product = this.products.find((product) => product.id === id)

    if (!product) {
      return null
    }

    return product
  }

  async update(data: Partial<ProductProps>, id: UniqueEntityID) {
    const product = this.products.find((product) => product.id === id)

    if (!product) {
      throw new Error('Product not found')
    }

    Object.assign(product, data)

    return product
  }
}
