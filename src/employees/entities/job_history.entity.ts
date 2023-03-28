import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Departments } from './departments.entity';
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
  @JoinColumn()
  job_id: Jobs;

  @OneToOne(() => Departments)
  @JoinColumn()
  department_id: Departments;
}
