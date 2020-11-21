import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DispositivoEntity } from '../Dispositivo/dispositivo.entity';
import { DatosUsuarioEntity } from '../DatosUsuario/datos-usuario.entity';

@Entity("dispositivo-usuario")
export class DispositivoUsuarioEntity {

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  datosUsuarioId:number;

  @Column()
  dispositivoId:number

  @ManyToOne(()=>DispositivoEntity,  dispositivo =>dispositivo.dispositivo_usuario)
  dispositivo:DispositivoEntity

  @ManyToOne(()=>DatosUsuarioEntity,  datos_usuario =>datos_usuario.dispositivo_usuario)
  datosUsuario:DatosUsuarioEntity

}
