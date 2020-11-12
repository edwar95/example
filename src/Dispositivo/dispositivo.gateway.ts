import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { DispositivoService } from './dispositivo.service';
import { DispositivoCreateDto } from './dispositivo-create-dto/dispositivo-create-dto';
import { DispositivoUpdateDto } from './dispositivo-update-dto/dispositivo-update-dto';
import { politicasDispositivo } from './dispositivo-politicas/dispositivo.politicas';
import { mensajesDispositivo } from './dispositivo-mensajes/dispositivo.mensajes';

@WebSocketGateway(3001, { namespace: '/dispositivo' })
export class DispositivoGateway extends PrincipalGateway {
    constructor(private readonly _dispositivoService: DispositivoService) {
        super(
            'http://localhost:3001',
            '/dispositivo',
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
            politicasDispositivo, // politicas de seguridad
            _dispositivoService, // servicio
            {  // Dto
                CreateDto: DispositivoCreateDto,
                UpdateDto: DispositivoUpdateDto
            },
            0, // take
            30, // skip
            mensajesDispositivo,
            undefined);
        this.contexto = this;
    }

}