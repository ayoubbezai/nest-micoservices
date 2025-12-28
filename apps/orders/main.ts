import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'orders',
      protoPath: join(__dirname, '../proto/orders.proto'),
      url: '0.0.0.0:50053',
    },
  });
  await app.listen();
  console.log('productsServices running on 50053');
}
bootstrap();
