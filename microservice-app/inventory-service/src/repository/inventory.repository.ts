import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from '../model/inventory.schema';

@Injectable()
export class InventoryRepository {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {}

  findByProductId(productId: string) {
    return this.inventoryModel.findOne({ productId }).exec();
  }
}
