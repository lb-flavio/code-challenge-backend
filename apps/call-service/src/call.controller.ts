import { Controller, Post, Body } from '@nestjs/common';
import { CallService } from './call.service';
import { CreateCallDto } from './call.dto';

@Controller('call')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Post()
  async create(@Body() createCallDto: CreateCallDto) {
    return this.callService.createCall(createCallDto);
  }
}
