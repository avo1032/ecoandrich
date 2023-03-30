import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Employees } from './employees.entity';
import { JobHistory } from './job_history.entity';
import { Locations } from './locations.entity';

@Entity({ name: 'departments' })
export class Departments {
  @PrimaryColumn()
  department_id: number;

  @Column()
  department_name: string;

  @ManyToOne(() => Employees, (employee) => employee.department)
  manager: Employees;

  @ManyToOne(() => Locations)
  @JoinColumn({ name: 'location_id' })
  location: Locations;

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.department)
  jobHistory: JobHistory[];

  @OneToMany(() => Employees, (employee) => employee.department)
  employees: Employees[];
}
