import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderRepository } from '../repository/order.repository';
import { CreateOrderDto } from '../dto/create-order.dto';
import { catchError, lastValueFrom, of, timeout } from 'rxjs';
// KafkaTemplate
@Injectable()
export class OrderService implements OnModuleInit {
  constructor(
    private readonly orderRepository: OrderRepository,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientKafka,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.inventoryClient.subscribeToResponseOf('check_inventory');
    await this.inventoryClient.connect();
    await this.notificationClient.connect();
  }

  async createOrder(dto: CreateOrderDto) {
     const order = await this.orderRepository.create({ ...dto, status: 'pending' });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const orderId = order.id;

    // check inventory with proper conversion of Observable to Promise
    const isAvailable = await lastValueFrom(
      this.inventoryClient
        .send<boolean, CreateOrderDto>('check_inventory', dto)
        .pipe(
          timeout(5000),                // timeout after 5s
          catchError(() => of(false)),   // fallback to false on error
        ),
    );
    const status = isAvailable ? 'confirmed' : 'rejected';

    // update and notify
    const updated = await this.orderRepository.update(orderId, { status });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const updatedId = updated?.id;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.notificationClient.emit('order_status', { orderId: updatedId, status });
    return updated;
  }
}
