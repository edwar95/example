import { Controller } from '@nestjs/common';
import { DatosUsuarioService } from './datos-usuario.service';
import { DatosUsuarioUpdateDto } from './datos-usuario-update-dto/datos-usuario-update-dto';
import { DatosUsuarioCreateDto } from './datos-usuario-create-dto/datos-usuario-create-dto';
import { politicasDatosUsuario } from './datos-usuario-politicas/datos-usuario.politicas';
import { mensajesDatosUsuario } from './datos-usuario-mensajes/datos-usuario.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('datos-usuario')
export class DatosUsuarioController extends PrincipalController<
    DatosUsuarioCreateDto,
    DatosUsuarioUpdateDto> {
    constructor(private readonly _datosUsuarioService: DatosUsuarioService) {
        super( politicasDatosUsuario, // politicas de seguridad
        _datosUsuarioService, // servicio
            { // Dto
                CreateDto: DatosUsuarioCreateDto,
                UpdateDto: DatosUsuarioUpdateDto
            },
            0, // skip
            30, // take
            mensajesDatosUsuario,
            undefined // contexto
            );
        this.contexto = this;
    }


}
