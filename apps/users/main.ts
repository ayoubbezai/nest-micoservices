import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'users',
      protoPath: join(__dirname, '../proto/users.proto'),
      url: '0.0.0.0:50051',
    },
  });
  await app.listen();
  console.log('UsersService running on 50051');
}
bootstrap();
