import { Entity } from '@/core/entities'
import { UniqueEntityID } from '@/core/unique-entity-id'
import { Product } from './product'

export interface StockProps {
  name: string
  products: Array<Product>
  createdAt: Date
  updatedAt?: Date
}

export class Stock extends Entity<StockProps> {
  static create(props: StockProps, id?: UniqueEntityID) {
    return new Stock(props, id)
  }

  get name() {
    return this.props.name
  }

  get products(): Array<Product> {
    return this.props.products
  }

  set products(product: Product) {
    this.props.products.push(product)
  }
}
