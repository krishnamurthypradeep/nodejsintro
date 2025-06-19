import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // dependency injection
  constructor(private readonly appService: AppService) {}

  // Rest API
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
