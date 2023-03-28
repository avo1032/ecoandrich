import { Injectable } from '@nestjs/common';
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
    });

    return department;
  }
}
