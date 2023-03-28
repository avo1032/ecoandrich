import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Countries } from './entities/countries.entity';
import { Employees } from './entities/employees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Countries, Employees])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
