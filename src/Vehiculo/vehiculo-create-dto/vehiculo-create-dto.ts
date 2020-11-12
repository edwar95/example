import { IsInt } from 'class-validator';
import { PrincipalDto } from '@manticore-labs/nest';
import { IsNotEmpty } from 'class-validator';
import { Length } from 'class-validator';
import { IsString } from 'class-validator';

export class VehiculoCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(3,30)
  @IsString()
  marca:string

  @IsNotEmpty()
  @Length(0,8)
  @IsString()
  placa:string

  @IsNotEmpty()
  @IsInt()
  id_datos_usuario:string

}
