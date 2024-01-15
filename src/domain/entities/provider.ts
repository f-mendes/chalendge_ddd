import { Entity } from '@/core/entities'
import { UniqueEntityID } from '@/core/unique-entity-id'

export interface ProviderProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class Provider extends Entity<ProviderProps> {
  get name() {
    return this.props.name
  }

  static create(props: ProviderProps, id?: UniqueEntityID) {
    return new Provider(props, id)
  }
}
