import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from 'src/entities/departments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private readonly departmentRepository: Repository<Departments>,
  ) {}

  async getDepartmentById(department_id: number) {
    const department = await this.departmentRepository.findOne({
      where: { department_id },
      relations: ['location', 'employees', 'jobHistory'],
    });

    if (!department) {
      throw new BadRequestException('해당하는 부서정보가 존재하지 않습니다.');
    }

    return department;
  }

  async getAllDepartments() {
    const departments = await this.departmentRepository.find({
      relations: ['location', 'employees', 'jobHistory'],
    });

    return departments;
  }
}
