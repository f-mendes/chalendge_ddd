import { UniqueEntityID } from '@/core/unique-entity-id'
import { Product } from '../entities/product'
import { ProductRepository } from '../repositories/product-repository'

interface UpdateProductRequest {
  color: string
  size: string
  price: number
  quantity: number
}

interface UpdateProductResponse {
  product: Product | null
}
export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    data: Partial<UpdateProductRequest>,
    id: UniqueEntityID,
  ): Promise<UpdateProductResponse> {
    const product = await this.productRepository.update(data, id)

    return {
      product,
    }
  }
}
