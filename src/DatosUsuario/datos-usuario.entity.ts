import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity, OneToMany } from 'typeorm';
import { DispositivoUsuarioEntity } from '../dispositivo-usuario/dispositivo-usuario.entity';

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

  @OneToMany(() => DispositivoUsuarioEntity, dispositivoUsuario => dispositivoUsuario.datosUsuarioId )
  dispositivo_usuario: DispositivoUsuarioEntity[]

}
