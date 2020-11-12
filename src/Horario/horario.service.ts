import { Injectable } from '@nestjs/common';
import { HorarioUpdateDto } from './horario-update-dto/horario-update-dto';
import { HorarioCreateDto } from './horario-create-dto/horario-create-dto';
import { HorarioEntity } from './horario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class HorarioService extends PrincipalService<
    HorarioEntity,
    HorarioCreateDto,
    HorarioUpdateDto> {
    constructor(@InjectRepository(HorarioEntity)
    private readonly _horarioRepository: Repository<HorarioEntity>) {
        super(_horarioRepository, HorarioEntity, 'default');
    }
}
