import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  productId!: string;

  @Prop({ required: true })
  quantity!: number;

  @Prop({ required: true, default: 'pending' })
  status!: string;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
