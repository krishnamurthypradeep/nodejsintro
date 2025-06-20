import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InventoryService } from '../service/inventory.service';
import { CheckInventoryDto } from '../dto/check-inventory.dto';

@Controller()
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // request response based pattern will be returning boolean to the caller
  @MessagePattern('check_inventory')
  checkInventory(data: CheckInventoryDto): Promise<boolean> {
    return this.inventoryService.check(data.productId, data.quantity);
  }
}
