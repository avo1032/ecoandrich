import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from 'src/entities/job_history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employees, JobHistory])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
