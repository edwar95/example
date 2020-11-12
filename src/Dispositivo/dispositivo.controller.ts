import { Controller } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';
import { DispositivoUpdateDto } from './dispositivo-update-dto/dispositivo-update-dto';
import { DispositivoCreateDto } from './dispositivo-create-dto/dispositivo-create-dto';
import { politicasDispositivo } from './dispositivo-politicas/dispositivo.politicas';
import { mensajesDispositivo } from './dispositivo-mensajes/dispositivo.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('dispositivo')
export class DispositivoController extends PrincipalController<
    DispositivoCreateDto,
    DispositivoUpdateDto> {
    constructor(private readonly _dispositivoService: DispositivoService) {
        super( politicasDispositivo, // politicas de seguridad
        _dispositivoService, // servicio
            { // Dto
                CreateDto: DispositivoCreateDto,
                UpdateDto: DispositivoUpdateDto
            },
            0, // skip
            30, // take
            mensajesDispositivo,
            undefined // contexto
            );
        this.contexto = this;
    }
}
