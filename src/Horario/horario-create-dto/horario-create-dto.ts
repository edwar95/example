import { IsDate, IsDateString, IsInt, IsOptional } from 'class-validator';
import { PrincipalDto, ValorEstaDentroDeArreglo } from '@manticore-labs/nest';
import { IsNotEmpty } from 'class-validator';
import { Length } from 'class-validator';
import { IsString } from 'class-validator';

export class HorarioCreateDto extends PrincipalDto {

  @IsOptional()
  @Length(0,255)
  @IsString()
  descripcion:string

  @IsNotEmpty()
  @IsString()
  @ValorEstaDentroDeArreglo([
    "D","F"
  ])
  tipo:string

  @IsNotEmpty()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  habilitado: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  lunes: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  martes: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  miercoles: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  jueves: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  viernes: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  sabado: 0 | 1;

  @IsOptional()
  @IsInt()
  @ValorEstaDentroDeArreglo([
    0,1
  ])
  domingo: 0 | 1;

  @IsOptional()
  @IsDateString()
  fecha_inicia:string

  @IsOptional()
  @IsDateString()
  fecha_finaliza:string

  @IsOptional()
  @IsDateString()
  hora_inicia:string

  @IsOptional()
  @IsDateString()
  hora_finaliza:string

}
