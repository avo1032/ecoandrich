import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'countries' })
export class Countries {
  @PrimaryColumn()
  country_id: string;

  @Column()
  country_name: string;

  @Column()
  region_id: number;
}
