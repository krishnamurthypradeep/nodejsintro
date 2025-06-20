import { Injectable } from '@nestjs/common';
import { InventoryRepository } from '../repository/inventory.repository';

@Injectable()
export class InventoryService {
  constructor(private readonly inventoryRepository: InventoryRepository) {}

  async check(productId: string, quantity: number): Promise<boolean> {
    const item = await this.inventoryRepository.findByProductId(productId);
    return item! && item.quantity >= quantity;
  }
}
