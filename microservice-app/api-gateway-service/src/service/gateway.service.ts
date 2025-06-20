/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/no-require-imports
import  CircuitBreaker =require('opossum');
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class GatewayService {
  private orderBreaker: InstanceType<typeof CircuitBreaker>;
  private inventoryBreaker: InstanceType<typeof CircuitBreaker>;

  constructor(private readonly http: HttpService) {
    const options = {
     timeout: 3000,
      errorThresholdPercentage: 50,
      resetTimeout: 10000,
      volumeThreshold: 5,            // minimum number of requests before CB evaluates failures
      rollingCountTimeout: 10000,    // time window for the windowed stats
      rollingCountBuckets: 10, 
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.orderBreaker = new CircuitBreaker(
      (dto: CreateOrderDto) =>
        lastValueFrom(
          this.http.post('http://localhost:3000/orders', dto).pipe(timeout(2000)),
        ),
      options,
    ).fallback(() => Promise.resolve({ data: false }))
    .on('open', () => console.warn('Inventory breaker OPEN'))
    .on('halfOpen', () => console.log('Inventory breaker HALF-OPEN'))
    .on('close', () => console.log('Inventory breaker CLOSED'));
    // this.inventoryBreaker.on('open', () => console.warn('Inventory breaker OPEN'));
    // this.inventoryBreaker.on('close', () => console.log('Inventory breaker CLOSED'));
    // this.orderBreaker.on('open', () => console.warn('Order breaker OPEN'));
    // this.orderBreaker.on('close', () => console.log('Order breaker CLOSED'));

    this.inventoryBreaker = new CircuitBreaker(
      ({ productId, quantity }: { productId: string; quantity: number }) =>
        lastValueFrom(
          this.http.get(`http://localhost:4000/${productId}/${quantity}`).pipe(timeout(1000)),
        ),
      options,
    );
    this.inventoryBreaker.on('open', () => console.warn('Inventory breaker OPEN'));
        this.inventoryBreaker.on('close', () => console.log('Inventory breaker CLOSED'));
  }

  async createOrder(dto: CreateOrderDto) {
    try {
      const res = await this.orderBreaker.fire(dto);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return res.data;
    } catch {
      return { status: 'failed', message: 'Order service unavailable' };
    }
  }

  async checkInventory(productId: string, quantity: number) {
    try {
      const res = await this.inventoryBreaker.fire({ productId, quantity });
      return res.data;
    } catch {
      return false;
    }
  }
}
