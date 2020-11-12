import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('vehiculo')
export class VehiculoEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"marca",
    length:30
  })
  marca: string;

  @Column({
    type:"varchar",
    name:"placa",
    length:8
  })
  placa: string;

  @Column({
    type:"int",
    name:"id_datos_usuario"
  })
  id_datos_usuario: number;

}
