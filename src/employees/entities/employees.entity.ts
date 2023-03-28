import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Departments } from './departments.entity';
import { Jobs } from './jobs.entity';

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
  @JoinColumn()
  job_id: Jobs;

  @Column()
  salary: number;

  @Column()
  commission_pct: number;

  @OneToOne(() => Employees)
  @JoinColumn()
  manager_id: Employees;

  @OneToOne(() => Departments)
  @JoinColumn()
  department_id: Departments;
}
