import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('lugar')
export class LugarEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"nombre",
    length:60
  })
  nombre: string;

  @Column({
    type:"tinyint",
    name:"habilitado",
  })
  habilitado: 1 | 0 = 0 ;


}
