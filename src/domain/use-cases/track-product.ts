import { UniqueEntityID } from "@/core/unique-entity-id";
import { Product } from "../entities/product";
import { ProductRepository } from "../repositories/product-repository";

interface TrackProductRequest {
  productId: UniqueEntityID;
}

interface TrackProductResponse {
  product: Product | null;
}

export class TrackProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(trackProduct: TrackProductRequest): Promise<TrackProductResponse> {
    const product = await this.productRepository.findById(trackProduct.productId);

    return {
      product
    }
  }
}