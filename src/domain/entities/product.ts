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

  get size() {
    return this.props.size
  }

  get price() {
    return this.props.price
  }

  get quantity() {
    return this.props.quantity
  }

  get quantityMin() {
    return this.props.quantityMin
  }
  
  get providerId() {
    return this.props.providerId
  }

  set color(color: string) {
     this.props.color = color
  }

  set size(size) {
    this.props.size = size
  }

  set price(price: number) {
    this.props.price = price
  }

  set quantity(quantity: number) {
    this.props.quantity = quantity
  }


  static create(props: ProductProps, id?: UniqueEntityID) {
    return new Product(props, id)
  }
}
