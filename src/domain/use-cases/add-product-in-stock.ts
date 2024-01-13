import { Product } from "../entities/product";
import { Stock } from "../entities/stock";
import { StockRepository } from "../repositories/stock-repository";

interface StockRequest {
    name: string;
    products: Array<Product>;
}

interface StockResponse {
    stock: Stock;
}

export class AddProductInStockUseCase {
    constructor(private readonly stockRepository: StockRepository) {}
    async execute(data: StockRequest): Promise<StockResponse> {
        const stock = await this.stockRepository.create({
            ...data,
            createdAt: new Date(),
        });

        return { stock };
    }
}