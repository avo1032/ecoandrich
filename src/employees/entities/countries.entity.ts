import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Regions } from './regions.entity';
@Entity({ name: 'countries' })
export class Countries {
  @PrimaryColumn()
  country_id: string;

  @Column()
  country_name: string;

  @OneToOne(() => Regions)
  @JoinColumn({ name: 'region_id' })
  region: Regions;
}
