import { IsInt, IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { PrincipalDto, ValorEstaDentroDeArreglo } from '@manticore-labs/nest';

export class DatosUsuarioCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  nombres:string

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  apellidos:string

  @IsNotEmpty()
  @IsString()
  identificacion_pais:string

  @IsNotEmpty()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  habilitado_auth0: 0 | 1;

}
