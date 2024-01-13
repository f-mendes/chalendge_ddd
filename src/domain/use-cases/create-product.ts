import { UniqueEntityID } from '@/core/unique-entity-id'
import { ProductRepository } from '../repositories/product-repository'
import { Product } from '../entities/product'

interface ProductRequest {
  name: string
  color: string
  size: string
  price: number
  quantity: number
  quantityMin: number
  providerId: string
}

interface ProductResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: ProductRequest): Promise<ProductResponse> {
    const product = await this.productRepository.create({
      ...data,
      createdAt: new Date(),
    })

    return { product }
  }
}
