import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'job_history' })
export class JobHistory {
  @PrimaryColumn()
  employee_id: number;

  @PrimaryColumn()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  job_id: string;

  @Column()
  department_id: number;
}
