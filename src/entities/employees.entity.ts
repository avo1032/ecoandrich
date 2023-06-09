import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Departments } from './departments.entity';
import { Jobs } from './jobs.entity';
import { JobHistory } from './job_history.entity';

@Entity({ name: 'employees' })
export class Employees {
  @PrimaryColumn()
  employee_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  hire_date: Date;

  @OneToOne(() => Jobs)
  @JoinColumn({ name: 'job_id' })
  job: Jobs;

  @Column()
  salary: number;

  @Column()
  commission_pct: number;

  @ManyToOne(() => Employees)
  @JoinColumn({ name: 'manager_id', referencedColumnName: 'employee_id' })
  manager: Employees;

  @ManyToOne(() => Departments, (department) => department.employees)
  @JoinColumn({ name: 'department_id' })
  department: Departments;
}
