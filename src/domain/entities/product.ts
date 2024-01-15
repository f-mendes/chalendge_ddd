import { Entity } from '@/core/entities'
import { UniqueEntityID } from '@/core/unique-entity-id'

export interface ProductProps {
  name: string
  color: string
  size: string
  price: number
  quantity: number
  quantityMin: number
  providerId: string
  createdAt: Date
  updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }

  get color() {
    return this.props.color
  }

  set color(color: string) {
    this.props.color = color
  }

  get size() {
    return this.props.size
  }

  set size(size) {
    this.props.size = size
  }

  get price() {
    return this.props.price
  }

  set price(price: number) {
    this.props.price = price
  }

  get quantity() {
    return this.props.quantity
  }

  set quantity(quantity: number) {
    this.props.quantity = quantity
  }

  get quantityMin() {
    return this.props.quantityMin
  }

  get providerId() {
    return this.props.providerId
  }

  static create(props: ProductProps, id?: UniqueEntityID) {
    return new Product(props, id)
  }
}
