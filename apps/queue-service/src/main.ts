import { NestFactory } from '@nestjs/core';
import { QueueServiceModule } from './queue.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueServiceModule);
  await app.listen(3001);
}
bootstrap();
