import { Controller, Get, Param, Inject, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';

interface UsersService {
  GetUser(data: { id: number }): Promise<{ id: number; name: string; email: string }>;
}

interface ProductsService {
  GetProduct(data: { id: number }): Promise<{ id: number; name: string; price: number }>;
}

interface OrdersService {
  GetOrder(data: { id: number }): Promise<{ id: number; userId: number; productId: number; quantity: number }>;
}

@Controller()
export class GatewayController implements OnModuleInit {
  private usersService: UsersService;
  private productsService: ProductsService;
  private ordersService: OrdersService;

  constructor(
    @Inject('USERS_SERVICE') private usersClient: ClientGrpc,
    @Inject('PRODUCTS_SERVICE') private productsClient: ClientGrpc,
    @Inject('ORDERS_SERVICE') private ordersClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.usersService = this.usersClient.getService<UsersService>('UsersService');
    this.productsService = this.productsClient.getService<ProductsService>('ProductsService');
    this.ordersService = this.ordersClient.getService<OrdersService>('OrdersService');
  }

  @Get('users/:id')
  getUser(@Param('id') id: number) {
    return this.usersService.GetUser({ id: Number(id) });
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return this.productsService.GetProduct({ id: Number(id) });
  }

  @Get('orders/:id')
  getOrder(@Param('id') id: number) {
    return this.ordersService.GetOrder({ id: Number(id) });
  }
}
