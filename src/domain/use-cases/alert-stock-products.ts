import { UniqueEntityID } from '@/core/unique-entity-id'
import { StockRepository } from '../repositories/stock-repository'

export class AlertStockProductsUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute(id: UniqueEntityID) {
    const products = await this.stockRepository.findProductsWithQuantityMin(id)
    if (!products) {
      return {
        message: 'Products with quantity min not found',
        products,
      }
    }

    return {
      message: 'There are products with quantity min',
      products,
    }
  }
}
