import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Countries } from './countries.entity';

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
  @JoinColumn()
  country_id: Countries;
}
