import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store'
import { GatewayController } from './controller/gateway.controller';
import { GatewayService } from './service/gateway.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      store: redisStore,                         
      host: process.env.REDIS_HOST || 'localhost',
      port: +process.env.REDIS_PORT! || 6379,
      ttl: -1,
    }),
    
    
  
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule {}
