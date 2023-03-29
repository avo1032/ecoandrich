import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { IncreaseSalaryByDepartmentDto } from './dto/employees.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get('/:employee_id')
  async getEmployeeById(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return await this.employeeService.getEmployeeById(employee_id);
  }

  @Get('history/:employee_id')
  async getHistoryByEmployeeId(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return await this.employeeService.getHistoryByEmployeeId(employee_id);
  }

  @Patch('increase-salary')
  async increaseSalaryByDepartment(@Body() body: IncreaseSalaryByDepartmentDto) {
    return this.employeeService.increaseSalaryByDepartment(body);
  }
}
