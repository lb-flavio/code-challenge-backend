import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Call } from './call.entity';
import { CreateCallDto } from './call.dto';
import { Kafka } from 'kafkajs';

@Injectable()
export class CallService {
  private kafka = new Kafka({
    clientId: 'callService',
    brokers: ['kafka:29092'],
  });
  private producer = this.kafka.producer();

  constructor(
    @InjectRepository(Call)
    private readonly callRepository: Repository<Call>,
  ) {
    this.producer.connect();
  }

  async createCall(createCallDto: CreateCallDto): Promise<Call> {
    const call = this.callRepository.create(createCallDto);
    await this.callRepository.save(call);

    await this.producer.send({
      topic: 'callRequests',
      messages: [{ value: JSON.stringify(createCallDto) }],
    });

    return call;
  }
}
