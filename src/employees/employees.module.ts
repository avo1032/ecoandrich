import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from 'src/entities/job_history.entity';
import { Departments } from 'src/entities/departments.entity';
import { Jobs } from 'src/entities/jobs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employees, JobHistory, Departments, Jobs]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
