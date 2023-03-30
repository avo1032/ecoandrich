import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  IncreaseSalaryByDepartmentDto,
  UpdateEmployeeDto,
} from './dto/employees.dto';
import { EmployeesService } from './employees.service';

@ApiTags('사원정보')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @ApiOperation({ summary: '특정 사원의 현재정보 조회' })
  @Get('/:employee_id')
  async getEmployeeById(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return await this.employeeService.getEmployeeById(employee_id);
  }

  @ApiOperation({ summary: '특정 사원의 이력정보 조회' })
  @Get('history/:employee_id')
  async getHistoryByEmployeeId(
    @Param('employee_id', ParseIntPipe) employee_id: number,
  ) {
    return await this.employeeService.getHistoryByEmployeeId(employee_id);
  }

  @ApiOperation({ summary: '특정부서 사원들의 급여를 특정비율로 인상' })
  @Patch('increase-salary')
  async increaseSalaryByDepartment(
    @Body() body: IncreaseSalaryByDepartmentDto,
  ) {
    return this.employeeService.increaseSalaryByDepartment(body);
  }

  @ApiOperation({ summary: '특정 사원정보 수정' })
  @Patch(':employee_id')
  async updateEmployee(
    @Param('employee_id', ParseIntPipe) employee_id: number,
    @Body() body: UpdateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(body, employee_id);
  }
}
