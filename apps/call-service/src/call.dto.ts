import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CallType } from './call-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCallDto {
  @ApiProperty({
    description: 'Phone number of the caller',
    example: '123456789',
  })
  @IsString()
  @IsNotEmpty()
  from: string;

  @ApiProperty({
    description: 'Phone number of the receiver',
    example: '987654321',
  })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    description: 'Language of the call',
    example: 'en',
  })
  @IsString()
  @IsNotEmpty()
  language: string;

  @ApiProperty({
    description: 'Type of the call',
    enum: CallType,
    example: CallType.QUEUE,
  })
  @IsEnum(CallType)
  callType: CallType;
}
