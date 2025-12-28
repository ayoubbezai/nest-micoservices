import { join } from 'path';
import { ClientOptions, Transport } from '@nestjs/microservices';

export const grpcUsersOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '../proto/users.proto'),
    url: 'users:50051', // Docker service name
  },
};

export const grpcProductsOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'products',
    protoPath: join(__dirname, '../proto/products.proto'),
    url: 'products:50052',
  },
};

export const grpcOrdersOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'orders',
    protoPath: join(__dirname, '../proto/orders.proto'),
    url: 'orders:50053',
  },
};
