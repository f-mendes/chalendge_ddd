import { Provider } from '../entities/provider'
import { InMemoryProviders } from '../repositories/in-memory/in-memory-provider'
import { CreateProviderUseCase } from './create-provider'

let providerRepository: InMemoryProviders
let sut: CreateProviderUseCase

describe('Create Provider', () => {
  beforeEach(() => {
    providerRepository = new InMemoryProviders()
    sut = new CreateProviderUseCase(providerRepository)
  })

  it('should create a provider', async () => {

    const { provider } = await sut.execute({
      name: 'Provider 1',
    })
    
    expect(provider).toBeInstanceOf(Provider)
    expect(provider.id.toString()).toEqual(expect.any(String))
    expect(provider.name).toEqual('Provider 1')
      
  })
})
