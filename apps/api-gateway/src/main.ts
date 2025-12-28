import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './grpc.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(GrpcModule);
  const expressApp = await NestFactory.create(GrpcModule);
  await expressApp.listen(3000);
  console.log('API Gateway running on http://localhost:3000');
}
bootstrap();
