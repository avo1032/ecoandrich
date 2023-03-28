import { Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get('/:employee_id')
  async test(@Param('employee_id') employee_id: number) {
    return await this.employeeService.getEmployeeById(employee_id);
  }
}
