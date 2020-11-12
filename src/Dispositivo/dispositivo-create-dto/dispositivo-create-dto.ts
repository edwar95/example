import { IsNotEmpty, IsString, Length } from 'class-validator';
import { PrincipalDto } from '@manticore-labs/nest';

export class DispositivoCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  nombre: string

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  codigo_iso_3166: string

}
