import { PrincipalDto, ValorEstaDentroDeArreglo } from '@manticore-labs/nest';
import { IsNotEmpty } from 'class-validator';
import { IsInt } from 'class-validator';
import { Length } from 'class-validator';
import { IsString } from 'class-validator';

export class LugarCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(3,60)
  @IsString()
  nombre:string

  @IsNotEmpty()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  habilitado: 0 | 1;
}
