import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Countries } from './countries.entity';
import { Departments } from './departments.entity';

@Entity({ name: 'locations' })
export class Locations {
  @PrimaryColumn()
  location_id: number;

  @Column()
  street_address: string;

  @Column()
  postal_code: string;

  @Column()
  city: string;

  @Column()
  state_province: string;

  @OneToOne(() => Countries)
  @JoinColumn({ name: 'country_id' })
  country: Countries;

  @OneToMany(() => Departments, (department) => department.location)
  department: Departments[];
}
