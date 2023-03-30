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

  async getExchangeRateInfo(
    keyword: string,
    startDate: string,
    endDate: string,
  ) {
    const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.DATA_SECRET_KEY}&data=AP01`;
    let startDateResponse;
    let endDateResponse;
    let startData;
    if (!!startDate) {
      startDateResponse = await this.httpService.axiosRef.get(
        `${url}&searchdate=${startDate}`,
      );
      startData = startDateResponse.data;
    }
    if (!!endDate) {
      endDateResponse = await this.httpService.axiosRef.get(
        `${url}&searchdate=${endDate}`,
      );
    } else {
      endDateResponse = await this.httpService.axiosRef.get(url);
    }
    try {
      let endData = endDateResponse.data;
      let result;

      if (!!keyword) {
        if (!!startData) {
          startData = startData.filter((data) => data.cur_nm.includes(keyword));
        }
        endData = endData.filter((data) => data.cur_nm.includes(keyword));
      }
      if (!!startDate) {
        result = startData.map((startItem, index) => {
          const endItem = endData[index];
          const startRate = parseFloat(startItem.deal_bas_r.replace(/,/g, ''));
          const endRate = parseFloat(endItem.deal_bas_r.replace(/,/g, ''));
          const diff = endRate - startRate;
          const percentage = (diff / startRate) * 100;

          return {
            '국가/통화명': startItem.cur_nm,
            '첫 날 환율': startItem.deal_bas_r,
            '마지막 날 환율': endItem.deal_bas_r,
            변동률: percentage.toFixed(2) + '%',
          };
        });
        return result;
      } else {
        result = endData.map((data) => {
          return {
            '국가/통화명': data.cur_nm,
            환율: data.deal_bas_r,
          };
        });
        return result;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
