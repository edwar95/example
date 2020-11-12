import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('datos-usuario')
export class DatosUsuarioEntity extends PrincipalEntity {

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
    name:"identificacion_pais",
    length:60
  })
  identificacion_pais: string ;

  @Column({
    type:"tinyint",
    name:"habilitado_auth0",
  })
  habilitado_auth0: 1 | 0 = 0 ;

}
