import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';

@ApiTags('부서정보')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentsService) {}

  @ApiOperation({ summary: '특정 부서정보 조회' })
  @Get('/:department_id')
  async getDepartmentById(
    @Param('department_id', ParseIntPipe) department_id: number,
  ) {
    return await this.departmentService.getDepartmentById(department_id);
  }
}
