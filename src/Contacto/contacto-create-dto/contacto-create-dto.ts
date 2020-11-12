import { IsInt, IsOptional } from 'class-validator';
import { PrincipalDto } from '@manticore-labs/nest';
import { IsNotEmpty } from 'class-validator';
import { Length } from 'class-validator';
import { IsString } from 'class-validator';

export class ContactoCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  nombres:string

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  apellidos:string

  @IsOptional()
  @Length(3,30)
  @IsString()
  telefono?:string

  @IsNotEmpty()
  @IsInt()
  id_datos_usuario:string
}
