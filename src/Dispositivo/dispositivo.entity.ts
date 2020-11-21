import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity, OneToMany } from 'typeorm';
import { DispositivoUsuarioEntity } from '../dispositivo-usuario/dispositivo-usuario.entity';

@Entity('dispositivo')
export class DispositivoEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"nombre",
    length:60
  })
  nombre: string;

  @Column({
    type:"varchar",
    name:"codigo_iso_3166",
    length:60
  })
  codigo_iso_3166: string;

  @OneToMany(() => DispositivoUsuarioEntity, dispositivoUsuario => dispositivoUsuario.dispositivoId )
  dispositivo_usuario: DispositivoUsuarioEntity[]

}
