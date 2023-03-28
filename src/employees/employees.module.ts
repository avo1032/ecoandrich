import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Countries } from './entities/countries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Countries])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
