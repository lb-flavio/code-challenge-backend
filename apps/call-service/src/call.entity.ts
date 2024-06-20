import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { CallType } from './call-type.enum';

@Entity()
export class Call {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  language: string;

  @Column({
    type: 'enum',
    enum: CallType,
  })
  callType: CallType;

  @CreateDateColumn()
  createdAt: Date;
}
