import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Countries)
  @JoinColumn({ name: 'country_id' })
  country: Countries;
}
