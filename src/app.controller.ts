import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '환율정보 조회' })
  @Get('exchange-rate')
  async getExchangeRateInfo(@Query('keyword') keyword: string) {
    return await this.appService.getExchangeRateInfo(keyword);
  }
}
