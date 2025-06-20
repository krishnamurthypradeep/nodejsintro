import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Connect Kafka microservice for inter-service communication
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: { brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:19092'] },
      consumer: { groupId: 'inventory-consumer' },
    },
  });

  // Start Kafka listener
  await app.startAllMicroservices();

  // Start HTTP server
  await app.listen(4000);
  console.log('Inventory service listening on http://localhost:4000');

}
bootstrap();
