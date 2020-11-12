import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('contacto')
export class ContactoEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"nombres",
    length:60
  })
  nombres: string;

  @Column({
    type:"varchar",
    name:"apellidos",
    length:60
  })
  apellidos: string ;

  @Column({
    type:"varchar",
    name:"telefono",
    length:30
  })
  telefono?: string ;

  @Column({
    type:"int",
    name:"id_datos_usuario"
  })
  id_datos_usuario: number;
}
