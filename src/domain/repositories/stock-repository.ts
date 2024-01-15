import { UniqueEntityID } from '@/core/unique-entity-id'
import { Product } from '../entities/product'
import { Stock, StockProps } from '../entities/stock'

export interface FiltersStockReport {
  color: string
  size: string
  quantity: number
}

export interface StockRepository {
  create(data: StockProps): Promise<Stock>
  findById(id: UniqueEntityID): Promise<Stock | null>
  findProductsByFilters(
    filters: Partial<FiltersStockReport>,
    id: UniqueEntityID,
  ): Promise<Product[] | null>
  findProductsWithQuantityMin(id: UniqueEntityID): Promise<Product[] | null>
}
