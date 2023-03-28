import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentsService) {}

  @Get('/:department_id')
  async getDepartmentById(
    @Param('department_id', ParseIntPipe) department_id: number,
  ) {
    return await this.departmentService.getDepartmentById(department_id);
  }
}
