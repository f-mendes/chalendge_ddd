import { UniqueEntityID } from '@/core/unique-entity-id'
import { Product, ProductProps } from '../entities/product'

interface FieldsProductUpdate {
  color: string
  size: string
  price: number
  quantity: number
}

export interface ProductRepository {
  create(data: ProductProps): Promise<Product>
  findById(id: UniqueEntityID): Promise<Product | null>
  update(data: Partial<FieldsProductUpdate>, id: UniqueEntityID): Promise<Product>
}
