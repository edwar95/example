import { Injectable } from '@nestjs/common';
import { LugarUpdateDto } from './lugar-update-dto/lugar-update-dto';
import { LugarCreateDto } from './lugar-create-dto/lugar-create-dto';
import { LugarEntity } from './lugar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class LugarService extends PrincipalService<
    LugarEntity,
    LugarCreateDto,
    LugarUpdateDto> {
    constructor(@InjectRepository(LugarEntity)
    private readonly _lugarRepository: Repository<LugarEntity>) {
        super(_lugarRepository, LugarEntity, 'default');
    }
}
