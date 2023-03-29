import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from '../entities/job_history.entity';
import { IncreaseSalaryByDepartmentDto } from './dto/employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees)
    private readonly employeeRepository: Repository<Employees>,
  ) {}

  async getEmployeeById(employee_id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { employee_id },
      relations: ['job', 'manager', 'department'],
    });

    if (!employee) {
      throw new BadRequestException('해당하는 사원정보가 존재하지 않습니다.');
    }

    return employee;
  }

  async getHistoryByEmployeeId(employee_id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { employee_id },
      relations: ['jobHistory'],
    });

    if (!employee) {
      throw new BadRequestException('해당하는 사원정보가 존재하지 않습니다.');
    }

    return employee;
  }

  async increaseSalaryByDepartment(body: IncreaseSalaryByDepartmentDto) {
    const { department_id, salaryIncreasePercentage } = body;

    const employeesBeforeUpdate = await this.employeeRepository.find({
      where: { department: { department_id } },
    });

    const employeesAfterUpdate = await Promise.all(
      employeesBeforeUpdate.map(async (employee) => {
        const updatedSalary = Math.round(
          employee.salary * (1 + salaryIncreasePercentage / 100),
        );
        const updatedEmployee = { ...employee, salary: updatedSalary };
        await this.employeeRepository.save(updatedEmployee);
        return updatedEmployee;
      }),
    );

    return {
      beforeUpdate: employeesBeforeUpdate,
      afterUpdate: employeesAfterUpdate,
    };
  }
}
