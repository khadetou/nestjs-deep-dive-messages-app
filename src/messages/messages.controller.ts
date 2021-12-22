import { Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  listMessage() {
    return 'hello';
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
