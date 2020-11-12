import { IsNumber } from 'class-validator';
import { PrincipalDto } from '@manticore-labs/nest';
import { IsNotEmpty } from 'class-validator';
import { Length } from 'class-validator';
import { IsString } from 'class-validator';

export class PicoPlacasCreateDto extends PrincipalDto {

  @IsNotEmpty()
  @Length(0,5)
  @IsString()
  numero:string

  @IsNotEmpty()
  @IsNumber()
  id_lugar:number
}
