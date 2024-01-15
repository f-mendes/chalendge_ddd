import { Provider, ProviderProps } from '../entities/provider'

export interface ProviderRepository {
  create(data: ProviderProps): Promise<Provider>
}
