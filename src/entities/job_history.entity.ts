import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Departments } from './departments.entity';
import { Employees } from './employees.entity';
import { Jobs } from './jobs.entity';

@Entity({ name: 'job_history' })
export class JobHistory {
  @PrimaryColumn()
  employee_id: number;

  @PrimaryColumn()
  start_date: Date;

  @Column()
  end_date: Date;

  @OneToOne(() => Jobs)
  @JoinColumn({ name: 'job_id' })
  job: Jobs;

  @ManyToOne(() => Departments, (department) => department.jobHistory)
  @JoinColumn({ name: 'department_id' })
  department: Departments;
}
