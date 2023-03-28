import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'jobs' })
export class Jobs {
  @PrimaryColumn()
  job_id: string;

  @Column()
  job_title: string;

  @Column()
  min_salary: number;

  @Column()
  max_salary: number;
}
