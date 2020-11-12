import { Controller } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioUpdateDto } from './horario-update-dto/horario-update-dto';
import { HorarioCreateDto } from './horario-create-dto/horario-create-dto';
import { politicasHorario } from './horario-politicas/horario.politicas';
import { mensajesHorario } from './horario-mensajes/horario.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('horario')
export class HorarioController extends PrincipalController<
    HorarioCreateDto,
    HorarioUpdateDto> {
    constructor(private readonly _horarioService: HorarioService) {
        super( politicasHorario, // politicas de seguridad
        _horarioService, // servicio
            { // Dto
                CreateDto: HorarioCreateDto,
                UpdateDto: HorarioUpdateDto
            },
            0, // skip
            30, // take
            mensajesHorario,
            undefined // contexto
            );
        this.contexto = this;
    }
}
