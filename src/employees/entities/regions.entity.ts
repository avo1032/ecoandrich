import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'regions' })
export class Regions {
  @PrimaryColumn()
  region_id: number;

  @Column()
  region_name: string;
}
