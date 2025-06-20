import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Inventory, InventorySchema } from './model/inventory.schema';
import { InventoryController } from './controller/inventory.controller';
import { InventoryService } from './service/inventory.service';
import { InventoryRepository } from './repository/inventory.repository';

@Module({
  imports: [
     MongooseModule.forRoot('mongodb://localhost:27017/orderdb')
    ,
    MongooseModule.forFeature([{name:Inventory.name,schema:InventorySchema}]),
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
  controllers: [InventoryController],
  providers: [InventoryService,InventoryRepository],
})
export class AppModule {}
