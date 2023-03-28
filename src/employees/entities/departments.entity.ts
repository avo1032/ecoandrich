import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Employees } from './employees.entity';
import { Locations } from './locations.entity';

@Entity({ name: 'departments' })
export class Departments {
  @PrimaryColumn()
  department_id: number;

  @Column()
  department_name: string;

  @OneToOne(() => Employees)
  @JoinColumn()
  manager_id: Employees;

  @OneToOne(() => Locations)
  @JoinColumn()
  location_id: Locations;
}
