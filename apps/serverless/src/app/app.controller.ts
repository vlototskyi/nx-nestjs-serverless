import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class AppController {
  @Get()
  getData() {
    return 'Welcome to serverless!'
  }
}
