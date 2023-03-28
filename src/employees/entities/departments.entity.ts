import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'departments' })
export class Departments {
  @PrimaryColumn()
  department_id: number;

  @Column()
  department_name: string;

  @Column()
  manager_id: number;

  @Column()
  location_id: number;
}
