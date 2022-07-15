import { NestFactory } from '@nestjs/core';
import { grpcOptions } from './grpc.options';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcOptions);
  await app.startAllMicroservices();
}
bootstrap();