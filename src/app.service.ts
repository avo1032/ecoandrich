import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { stringify } from 'querystring';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getExchangeRateInfo(keyword: string) {
    const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.DATA_SECRET_KEY}&data=AP01`;

    try {
      const response = await this.httpService.axiosRef.get(url);
      let data = response.data;
      if (!!keyword) {
        data = data.filter((data) => data.cur_nm.includes(keyword));
      }
      let result = data.map((data) => {
        return {
          '국가/통화명': data.cur_nm,
          '전신환(송금)받으실때': data.ttb,
          '전신환(송금)보내실때': data.tts,
        };
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
