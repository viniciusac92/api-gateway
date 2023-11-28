import { Body, Controller, Get, Logger, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Observable } from 'rxjs';

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
    this.clientAdminBackend.emit('vinicius-criar-categoria', criarCategoriaDto)
  }

  @Get('categorias')
  consultarCategorias(@Query('idCategoria') _id: string): Observable<any> {

    // routing key: vinicius-consultar-categorias
    return this.clientAdminBackend.send('vinicius-consultar-categorias', _id ? _id : '')

  }
}
