import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('환율정보')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '환율정보 조회' })
  @ApiQuery({
    name: 'keyword',
    type: 'string',
    description:
      '국가/통화명으로 검색가능합니다. / 요청값이 없을 시 모든 환율정보가 응답합니다.',
    required: false,
  })
  @ApiQuery({
    name: 'startDate',
    type: 'string',
    description:
      '환율 비교시 첫 날 입력값입니다. / 요청값이 없을 시 endDate의 환율정보로 응답합니다. ex) 20230102',
    required: false,
  })
  @ApiQuery({
    name: 'endDate',
    type: 'string',
    description:
      '환율 비교시 마지막 날 입력값입니다. / 요청값이 없을 시 기본값은 당일 입니다. ex) 20230330',
    required: false,
  })
  @Get('exchange-rate')
  async getExchangeRateInfo(
    @Query('keyword') keyword: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return await this.appService.getExchangeRateInfo(
      keyword,
      startDate,
      endDate,
    );
  }
}
