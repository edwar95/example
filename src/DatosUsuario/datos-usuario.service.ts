import { Injectable } from '@nestjs/common';
import { DatosUsuarioUpdateDto } from './datos-usuario-update-dto/datos-usuario-update-dto';
import { DatosUsuarioCreateDto } from './datos-usuario-create-dto/datos-usuario-create-dto';
import { DatosUsuarioEntity } from './datos-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class DatosUsuarioService extends PrincipalService<
    DatosUsuarioEntity,
    DatosUsuarioCreateDto,
    DatosUsuarioUpdateDto> {
    constructor(@InjectRepository(DatosUsuarioEntity)
    private readonly _datosUsuarioRepository: Repository<DatosUsuarioEntity>) {
        super(_datosUsuarioRepository, DatosUsuarioEntity, 'default');
    }
}
