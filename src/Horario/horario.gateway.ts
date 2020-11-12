import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { HorarioService } from './horario.service';
import { HorarioCreateDto } from './horario-create-dto/horario-create-dto';
import { HorarioUpdateDto } from './horario-update-dto/horario-update-dto';
import { politicasHorario } from './horario-politicas/horario.politicas';
import { mensajesHorario } from './horario-mensajes/horario.mensajes';

@WebSocketGateway(3001, { namespace: '/horario' })
export class HorarioGateway extends PrincipalGateway {
    constructor(private readonly _horarioService: HorarioService) {
        super(
            'http://localhost:3001',
            '/horario',
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
            politicasHorario, // politicas de seguridad
            _horarioService, // servicio
            {  // Dto
                CreateDto: HorarioCreateDto,
                UpdateDto: HorarioUpdateDto
            },
            0, // take
            30, // skip
            mensajesHorario,
            undefined);
        this.contexto = this;
    }

}