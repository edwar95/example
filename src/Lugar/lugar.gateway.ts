import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { LugarService } from './lugar.service';
import { LugarCreateDto } from './lugar-create-dto/lugar-create-dto';
import { LugarUpdateDto } from './lugar-update-dto/lugar-update-dto';
import { politicasLugar } from './lugar-politicas/lugar.politicas';
import { mensajesLugar } from './lugar-mensajes/lugar.mensajes';

@WebSocketGateway(3001, { namespace: '/lugar' })
export class LugarGateway extends PrincipalGateway {
    constructor(private readonly _lugarService: LugarService) {
        super(
            'http://localhost:3001',
            '/lugar',
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
            politicasLugar, // politicas de seguridad
            _lugarService, // servicio
            {  // Dto
                CreateDto: LugarCreateDto,
                UpdateDto: LugarUpdateDto
            },
            0, // take
            30, // skip
            mensajesLugar,
            undefined);
        this.contexto = this;
    }

}