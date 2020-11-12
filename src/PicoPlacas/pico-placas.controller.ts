import { Controller } from '@nestjs/common';
import { PicoPlacasService } from './pico-placas.service';
import { PicoPlacasUpdateDto } from './pico-placas-update-dto/pico-placas-update-dto';
import { PicoPlacasCreateDto } from './pico-placas-create-dto/pico-placas-create-dto';
import { politicasPicoPlacas } from './pico-placas-politicas/pico-placas.politicas';
import { mensajesPicoPlacas } from './pico-placas-mensajes/pico-placas.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('pico-placas')
export class PicoPlacasController extends PrincipalController<
    PicoPlacasCreateDto,
    PicoPlacasUpdateDto> {
    constructor(private readonly _picoPlacasService: PicoPlacasService) {
        super( politicasPicoPlacas, // politicas de seguridad
        _picoPlacasService, // servicio
            { // Dto
                CreateDto: PicoPlacasCreateDto,
                UpdateDto: PicoPlacasUpdateDto
            },
            0, // skip
            30, // take
            mensajesPicoPlacas,
            undefined // contexto
            );
        this.contexto = this;
    }
}
