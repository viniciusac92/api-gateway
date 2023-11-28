import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';

@Controller('api/v1')
export class AppController {
  private logger = new Logger(AppController.name);

  private clientAdminBackend: ClientProxy;

  constructor() {
    this.clientAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'categorias-fifo',
        queueOptions: {
          durable: true,
        },
      },
    });
  }


  @Post('categorias')
  @UsePipes(ValidationPipe)
  async criarCategoria(
    @Body()
    criarCategoriaDto: CriarCategoriaDto
  ) {
    await this.clientAdminBackend.connect();

    // routing key: vinicius-criar-categoria
    return this.clientAdminBackend.emit('vinicius-criar-categoria', criarCategoriaDto)

  }
}
