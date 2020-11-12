import { Controller } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoUpdateDto } from './vehiculo-update-dto/vehiculo-update-dto';
import { VehiculoCreateDto } from './vehiculo-create-dto/vehiculo-create-dto';
import { politicasVehiculo } from './vehiculo-politicas/vehiculo.politicas';
import { mensajesVehiculo } from './vehiculo-mensajes/vehiculo.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('vehiculo')
export class VehiculoController extends PrincipalController<
    VehiculoCreateDto,
    VehiculoUpdateDto> {
    constructor(private readonly _vehiculoService: VehiculoService) {
        super( politicasVehiculo, // politicas de seguridad
        _vehiculoService, // servicio
            { // Dto
                CreateDto: VehiculoCreateDto,
                UpdateDto: VehiculoUpdateDto
            },
            0, // skip
            30, // take
            mensajesVehiculo,
            undefined // contexto
            );
        this.contexto = this;
    }
}
