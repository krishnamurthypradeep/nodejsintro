import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ required: true, unique: true })
  productId!: string;

  @Prop({ required: true })
  quantity!: number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
