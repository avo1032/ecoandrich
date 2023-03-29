import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from 'src/entities/departments.entity';
import { Jobs } from 'src/entities/jobs.entity';
import { Repository } from 'typeorm';
import { Employees } from '../entities/employees.entity';
import { JobHistory } from '../entities/job_history.entity';
import {
  IncreaseSalaryByDepartmentDto,
  UpdateEmployeeDto,
} from './dto/employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees)
    private readonly employeeRepository: Repository<Employees>,
    @InjectRepository(Departments)
    private readonly departmentsRepository: Repository<Departments>,
    @InjectRepository(Jobs)
    private readonly jobsRepository: Repository<Jobs>,
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

  async updateEmployee(body: UpdateEmployeeDto, employee_id: number) {
    const { job_id, department_id, ...rest } = body;

    const employee = await this.employeeRepository.findOne({
      where: { employee_id },
      relations: ['department', 'job'],
    });

    if (!employee) {
      throw new BadRequestException('해당하는 사원정보가 존재하지 않습니다.');
    }

    Object.assign(employee, rest);

    if (job_id) {
      employee.job = await this.jobsRepository.findOne({ where: { job_id } });
    }

    if (department_id) {
      employee.department = await this.departmentsRepository.findOne({
        where: { department_id },
      });
    }

    await this.employeeRepository.save(employee);

    return employee;
  }
}
