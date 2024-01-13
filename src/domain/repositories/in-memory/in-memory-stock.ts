import { Stock, StockProps } from "@/domain/entities/stock"
import { FiltersStockReport, StockRepository } from "../stock-repository"
import { UniqueEntityID } from "@/core/unique-entity-id"

export class InMemoryStockRepository implements StockRepository {
  private stocks: Stock[] = []

  async create(data: StockProps): Promise<Stock> {
    const stock = Stock.create(data)
    this.stocks.push(stock)
    return stock
  }

  async findById(id: UniqueEntityID) {
    const stock = this.stocks.find(stock => stock.id === id)

    if (!stock) {
      return null
    }

    return stock
  }

  async findProductsByFilters(filters: Partial<FiltersStockReport>, id: UniqueEntityID) {
    const stock: Stock | null = await this.findById(id)

    if (!stock) {
      throw new Error('Stock not found')
    }

    const product = stock.products.filter(product => {
      if (filters.color && product.color !== filters.color) return false
      if (filters.size && product.size !== filters.size) return false
      if (filters.quantity && product.quantity !== filters.quantity) return false
      return true
    })

    if (!product) {
      return null
    }
    
    return product
  }

  async findProductsWithQuantityMin(id: UniqueEntityID) {
    const stock: Stock | null = await this.findById(id)
    const product = stock?.products.filter(product => product.quantity <= product.quantityMin)

    if (!product) {
      return null
    }

    return product
  }

}