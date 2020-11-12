import { PrincipalEntity } from '@manticore-labs/nest';
import { Column, Entity } from 'typeorm';

@Entity('horario')
export class HorarioEntity extends PrincipalEntity {

  @Column({
    type:"varchar",
    name:"descripcion",
    length:255
  })
  descripcion: string ;

  @Column({
    type:"varchar",
    name:"tipo",
    length:1
  })
  tipo: "D" | "F" ;

  @Column({
    type:"tinyint",
    name:"habilitado",
  })
  habilitado: 1 | 0 = 1 ;

  @Column({
    type:"tinyint",
    name:"lunes",
  })
  lunes: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"martes",
  })
  martes: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"miercoles",
  })
  miercoles: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"jueves",
  })
  jueves: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"viernes",
  })
  viernes: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"sabado",
  })
  sabado: 1 | 0 = 0 ;

  @Column({
    type:"tinyint",
    name:"domingo",
  })
  domingo: 1 | 0 = 0 ;

  @Column({
    type:"date",
    name:"fecha_inicia",
  })
  fecha_inicia: string ;

  @Column({
    type:"date",
    name:"fecha_finaliza",
  })
  fecha_finaliza: string ;

  @Column({
    type:"time",
    name:"hora_inicia",
  })
  hora_inicia: string ;

  @Column({
    type:"time",
    name:"hora_finaliza",
  })
  hora_finaliza: string ;

}
