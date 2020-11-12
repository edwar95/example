import { Controller } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { LugarUpdateDto } from './lugar-update-dto/lugar-update-dto';
import { LugarCreateDto } from './lugar-create-dto/lugar-create-dto';
import { politicasLugar } from './lugar-politicas/lugar.politicas';
import { mensajesLugar } from './lugar-mensajes/lugar.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('lugar')
export class LugarController extends PrincipalController<
    LugarCreateDto,
    LugarUpdateDto> {
    constructor(private readonly _lugarService: LugarService) {
        super( politicasLugar, // politicas de seguridad
        _lugarService, // servicio
            { // Dto
                CreateDto: LugarCreateDto,
                UpdateDto: LugarUpdateDto
            },
            0, // skip
            30, // take
            mensajesLugar,
            undefined // contexto
            );
        this.contexto = this;
    }
}
