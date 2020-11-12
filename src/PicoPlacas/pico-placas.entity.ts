import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('pico-placas')
export class PicoPlacasEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"numero",
    length:5
  })
  numero: string;

  @Column({
    type:"int",
    name:"id_lugar"
  })
  id_lugar: number;
}
