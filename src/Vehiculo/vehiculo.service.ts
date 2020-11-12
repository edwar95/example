import { Injectable } from '@nestjs/common';
import { VehiculoUpdateDto } from './vehiculo-update-dto/vehiculo-update-dto';
import { VehiculoCreateDto } from './vehiculo-create-dto/vehiculo-create-dto';
import { VehiculoEntity } from './vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class VehiculoService extends PrincipalService<
    VehiculoEntity,
    VehiculoCreateDto,
    VehiculoUpdateDto> {
    constructor(@InjectRepository(VehiculoEntity)
    private readonly _vehiculoRepository: Repository<VehiculoEntity>) {
        super(_vehiculoRepository, VehiculoEntity, 'default');
    }
}
