import { Provider, ProviderProps } from '@/domain/entities/provider'
import { ProviderRepository } from '../provider-repository'

export class InMemoryProviders implements ProviderRepository {
  public providers: Provider[] = []

  async create(data: ProviderProps) {
    const provider = Provider.create(data)

    this.providers.push(provider)

    return provider
  }
}
