import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcUsersOptions, grpcProductsOptions, grpcOrdersOptions } from './grpc.options';
import { GatewayController } from './gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', ...grpcUsersOptions },
      { name: 'PRODUCTS_SERVICE', ...grpcProductsOptions },
      { name: 'ORDERS_SERVICE', ...grpcOrdersOptions },
    ]),
  ],
  controllers: [GatewayController],
})
export class GrpcModule {}
