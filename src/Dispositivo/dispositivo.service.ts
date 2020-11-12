import { Injectable } from '@nestjs/common';
import { DispositivoUpdateDto } from './dispositivo-update-dto/dispositivo-update-dto';
import { DispositivoCreateDto } from './dispositivo-create-dto/dispositivo-create-dto';
import { DispositivoEntity } from './dispositivo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class DispositivoService extends PrincipalService<
    DispositivoEntity,
    DispositivoCreateDto,
    DispositivoUpdateDto> {
    constructor(@InjectRepository(DispositivoEntity)
    private readonly _dispositivoRepository: Repository<DispositivoEntity>) {
        super(_dispositivoRepository, DispositivoEntity, 'default');
    }
}
