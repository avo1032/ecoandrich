import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class IncreaseSalaryByDepartmentDto {
  @ApiProperty({
    example: 100,
    description: '부서 ID',
  })
  @IsNumber()
  @IsNotEmpty()
  department_id: number;

  @ApiProperty({
    example: 50,
    description: '급여 증가비율',
  })
  @IsNumber()
  @IsNotEmpty()
  salaryIncreasePercentage: number;
}

export class UpdateEmployeeDto {
  @ApiProperty({
    example: 'Steven',
  })
  @IsOptional()
  @IsString()
  first_name?: string;

  @ApiProperty({
    example: 'King',
  })
  @IsOptional()
  @IsString()
  last_name?: string;

  @ApiProperty({
    example: 'SKING',
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    example: '515.123.4567',
  })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @ApiProperty({
    example: '1987-06-17',
  })
  @IsOptional()
  @IsDate()
  hire_date?: Date;

  @ApiProperty({
    example: 'AD_PRES',
  })
  @IsOptional()
  @IsString()
  job_id?: string;

  @ApiProperty({
    example: 24000,
  })
  @IsOptional()
  @IsNumber()
  salary?: number;

  @ApiProperty({
    example: '0.10',
  })
  @IsOptional()
  @IsNumber()
  commission_pct?: number;

  @ApiProperty({
    example: 100,
  })
  @IsOptional()
  @IsNumber()
  manager_id?: number;

  @ApiProperty({
    example: 90,
  })
  @IsOptional()
  @IsNumber()
  department_id?: number;
}
