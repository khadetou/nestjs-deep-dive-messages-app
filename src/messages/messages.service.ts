import { CreateMessageDto } from './dto/create-message.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private readonly messages: string[] = [];

  public add(createMessageDto: CreateMessageDto) {
    const { content } = createMessageDto;
    this.messages.push(content);
  }

  public getAll(): string[] {
    return this.messages;
  }
}
