# api-gateway
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## Overview

Este projeto funciona como um Gateway, fornecendo um ponto centralizado para gerenciar e rotear solicitações HTTP para vários microsserviços em sua arquitetura. O message broker utilizado bem como os repositórios de cada microsserviço estão listados as seguir.

This project acts as a Gateway, providing a centralized point to manage and route HTTP requests to various microservices within your architecture. The message broker used, as well as the repositories for each microservice, are listed below.

## Iniciando

### Pré-requisitos

- Node.js and npm instalados
- [NestJS CLI](https://docs.nestjs.com/cli/overview) instalado
- Docker instalados (para o setup RabbitMQ)

### RabbitMQ

Para habilitar a funcionalidade de fila de mensagens para a comunicação entre microsserviços, utilize o RabbitMQ como um message broker usando o Docker. Execute o seguinte comando para iniciar um contêiner RabbitMQ:


```bash
docker run --hostname rmq --name rabbit-server -p 8080:15672 -p 5672:5672 rabbitmq:3-management
```

Este comando realiza um 'pull' da imagem oficial do RabbitMQ e expõe o console de gerenciamento na porta 8080. O nome de usuário padrão é guest, e a senha também é guest.

Certifique-se de executar este comando antes de iniciar o API Gateway e quaisquer microsserviços que dependam do RabbitMQ para comunicação.

Assim que o contêiner RabbitMQ estiver em execução, você pode acessar o console de gerenciamento navegando até http://localhost:8080 em seu navegador.

## Instalação

```bash
$ npm install
```

## Running

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Serviços

- link
- link
- link



## License

Nest is [MIT licensed](LICENSE).
