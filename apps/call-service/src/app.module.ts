import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CallController } from './call.controller';
import { CallService } from './call.service';
import { Call } from './call.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'calldb',
      entities: [Call],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Call]),
  ],
  controllers: [CallController],
  providers: [CallService],
})
export class AppModule {}
