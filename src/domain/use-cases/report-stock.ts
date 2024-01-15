import { UniqueEntityID } from '@/core/unique-entity-id'
import { StockRepository } from '../repositories/stock-repository'
import { Product } from '../entities/product'

interface ReportStockRequest {
  color: string
  size: string
  quantity: number
}

export class ReportStockUseCase {
  constructor(private readonly stockRepository: StockRepository) {}

  async execute(
    filters: Partial<ReportStockRequest>,
    id: UniqueEntityID,
  ): Promise<Product[] | null> {
    const products = this.stockRepository.findProductsByFilters(filters, id)

    return products
  }
}
