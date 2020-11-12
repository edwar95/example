import { Injectable } from '@nestjs/common';
import { PicoPlacasUpdateDto } from './pico-placas-update-dto/pico-placas-update-dto';
import { PicoPlacasCreateDto } from './pico-placas-create-dto/pico-placas-create-dto';
import { PicoPlacasEntity } from './pico-placas.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class PicoPlacasService extends PrincipalService<
    PicoPlacasEntity,
    PicoPlacasCreateDto,
    PicoPlacasUpdateDto> {
    constructor(@InjectRepository(PicoPlacasEntity)
    private readonly _picoPlacasRepository: Repository<PicoPlacasEntity>) {
        super(_picoPlacasRepository, PicoPlacasEntity, 'default');
    }
}
