import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class QueueService {
  private kafka = new Kafka({
    clientId: 'queueService',
    brokers: ['kafka:29092'],
  });
  private consumer = this.kafka.consumer({ groupId: 'callGroup' });

  constructor() {
    this.startConsumer();
  }

  async startConsumer() {
    await this.consumer.connect();
    await this.consumer.subscribe({
      topic: 'callRequests',
      fromBeginning: true,
    });

    await this.consumer.run({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      eachMessage: async ({ topic, partition, message }) => {
        const callRequest = JSON.parse(message.value.toString());
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { callId, from, to, language, callType } = callRequest;

        if (callType === 'queue') {
          // Handle call queue logic
          console.log(`Queue: Handling call from ${from} to ${to}`);
        } else if (callType === 'ring_group') {
          // Handle ring group logic
          console.log(`Ring Group: Handling call from ${from} to ${to}`);
        }
      },
    });
  }
}
