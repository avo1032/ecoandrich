import { IsNotEmpty, IsNumber } from 'class-validator';

export class IncreaseSalaryByDepartmentDto {
  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @IsNumber()
  @IsNotEmpty()
  salaryIncreasePercentage: number;
}
