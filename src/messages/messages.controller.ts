import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessage() {
    return 'hello';
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
