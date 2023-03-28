import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from './entities/countries.entity';
import { Employees } from './entities/employees.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Countries)
    private readonly countryRepository: Repository<Countries>,
    @InjectRepository(Employees)
    private readonly employeeRepository: Repository<Employees>,
  ) {}

  async getEmployeeById(employee_id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { employee_id },
      relations: ['job', 'manager', 'department']
    });

    return employee;
  }
}
