import { Provider } from "../entities/provider"
import { ProviderRepository } from "../repositories/provider-repository"

interface ProviderRequest {
  name: string
}

interface ProviderResponse {
  provider: Provider
}

export class CreateProviderUseCase {
  constructor(private readonly providerRepository: ProviderRepository) {}

  async execute(data: ProviderRequest): Promise<ProviderResponse> {
    const provider = await this.providerRepository.create({
      ...data,
      createdAt: new Date(),
    })

    return {
      provider,
    }
  }
}