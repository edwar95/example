import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { DatosUsuarioService } from './datos-usuario.service';
import { DatosUsuarioCreateDto } from './datos-usuario-create-dto/datos-usuario-create-dto';
import { DatosUsuarioUpdateDto } from './datos-usuario-update-dto/datos-usuario-update-dto';
import { politicasDatosUsuario } from './datos-usuario-politicas/datos-usuario.politicas';
import { mensajesDatosUsuario } from './datos-usuario-mensajes/datos-usuario.mensajes';

@WebSocketGateway(3001, { namespace: '/datos-usuario' })
export class DatosUsuarioGateway extends PrincipalGateway {
    constructor(private readonly _datosUsuarioService: DatosUsuarioService) {
        super(
            'http://localhost:3001',
            '/datos-usuario',
            'secreto',
            { // funciones gateway
                afterInit: undefined,
                handleConnection: undefined,
                handleDisconnect: undefined
            },
            { // funciones broadcast
                createOne: {
                    broadcast: true,
                    funcionJoin: undefined
                },
                deleteOne: {
                    broadcast: true,
                    funcionJoin: undefined
                },
                updateOne: {
                    broadcast: true,
                    funcionJoin: undefined
                }
            },
            politicasDatosUsuario, // politicas de seguridad
            _datosUsuarioService, // servicio
            {  // Dto
                CreateDto: DatosUsuarioCreateDto,
                UpdateDto: DatosUsuarioUpdateDto
            },
            0, // take
            30, // skip
            mensajesDatosUsuario,
            undefined);
        this.contexto = this;
    }

}