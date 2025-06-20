import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from '../model/order.schema';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  create(data: Partial<Order>) {
    const created = new this.orderModel(data);
    return created.save();
  }

  update(id: string, update: Partial<Order>) {
    return this.orderModel.findByIdAndUpdate(id, update, { new: true }).exec();
  }
}
