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
  @JoinColumn({ name: 'job_id' })
  job: Jobs;

  @OneToOne(() => Departments)
  @JoinColumn({ name: 'department_id' })
  department: Departments;
}
