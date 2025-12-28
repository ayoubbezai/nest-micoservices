import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'products',
      protoPath: join(__dirname, '../proto/products.proto'),
      url: '0.0.0.0:50052',
    },
  });
  await app.listen();
  console.log('productsServices running on 50052');
}
bootstrap();
