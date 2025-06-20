import { Module } from '@nestjs/common';

import { ClientsModule,Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './model/order.schema';
import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order.service';
import { OrderRepository } from './repository/order.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/orderdb')
    ,
    MongooseModule.forFeature([{name: Order.name,schema:OrderSchema}]),
     ClientsModule.register([
    {
      name:'INVENTORY_SERVICE',
      transport: Transport.KAFKA,
      options:{client:{brokers:['0.0.0.0:19092']},
      consumer:{groupId:'order-inventory'}}
    },
    {
      name:'NOTIFICATION_SERVICE',
      transport: Transport.KAFKA,
      options:{client:{brokers:['0.0.0.0:19092']},
      consumer:{groupId:'order-notification'}}
    }
  ])
  ],
  controllers: [OrderController],
  providers: [OrderService,OrderRepository],
 
})
export class AppModule {}
