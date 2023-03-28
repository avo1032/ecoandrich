import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column()
  country_id: string;
}
