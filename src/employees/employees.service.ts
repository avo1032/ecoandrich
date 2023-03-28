import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from './entities/countries.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Countries)
    private readonly countryRepository: Repository<Countries>,
  ) {}

  async test() {
    const countries = await this.countryRepository.find();

    return countries;
  }
}
