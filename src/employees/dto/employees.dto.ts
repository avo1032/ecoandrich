import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class IncreaseSalaryByDepartmentDto {
  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @IsNumber()
  @IsNotEmpty()
  salaryIncreasePercentage: number;
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  first_name?: string;
  @IsOptional()
  @IsString()
  last_name?: string;
  @IsOptional()
  @IsString()
  email?: string;
  @IsOptional()
  @IsString()
  phone_number?: string;
  @IsOptional()
  @IsDate()
  hire_date?: Date;
  @IsOptional()
  @IsString()
  job_id?: string;
  @IsOptional()
  @IsNumber()
  salary?: number;
  @IsOptional()
  @IsNumber()
  commission_pct?: number;
  @IsOptional()
  @IsNumber()
  department_id?: number;
}
