import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('exchange-rate')
  async getExchangeRateInfo(@Query('keyword') keyword: string) {
    return await this.appService.getExchangeRateInfo(keyword);
  }
}
