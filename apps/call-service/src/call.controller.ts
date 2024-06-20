import { Controller, Post, Body } from '@nestjs/common';
import { CallService } from './call.service';
import { CreateCallDto } from './call.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Call } from './call.entity';

@ApiTags('call')
@Controller('call')
export class CallController {
  constructor(private readonly callService: CallService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new call' })
  @ApiResponse({
    status: 201,
    description: 'The call has been successfully created.',
    type: Call,
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async create(@Body() createCallDto: CreateCallDto) {
    return this.callService.createCall(createCallDto);
  }
}
