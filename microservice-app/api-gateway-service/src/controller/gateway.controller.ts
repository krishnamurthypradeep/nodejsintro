import { Controller, Post, Body, Get, Param, UseInterceptors } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { GatewayService } from '../service/gateway.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @UseInterceptors(CacheInterceptor)
  @Post('orders')
  createOrder(@Body() dto: CreateOrderDto) {
    return this.gatewayService.createOrder(dto);
  }

  @Get('inventory/:productId/:quantity')
  checkInventory(@Param('productId') productId: string, @Param('quantity') quantity: number) {
    return this.gatewayService.checkInventory(productId, +quantity);
  }
}
