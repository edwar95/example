import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { PicoPlacasService } from './pico-placas.service';
import { PicoPlacasCreateDto } from './pico-placas-create-dto/pico-placas-create-dto';
import { PicoPlacasUpdateDto } from './pico-placas-update-dto/pico-placas-update-dto';
import { politicasPicoPlacas } from './pico-placas-politicas/pico-placas.politicas';
import { mensajesPicoPlacas } from './pico-placas-mensajes/pico-placas.mensajes';

@WebSocketGateway(3001, { namespace: '/pico-placas' })
export class PicoPlacasGateway extends PrincipalGateway {
    constructor(private readonly _picoPlacasService: PicoPlacasService) {
        super(
            'http://localhost:3001',
            '/pico-placas',
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
            politicasPicoPlacas, // politicas de seguridad
            _picoPlacasService, // servicio
            {  // Dto
                CreateDto: PicoPlacasCreateDto,
                UpdateDto: PicoPlacasUpdateDto
            },
            0, // take
            30, // skip
            mensajesPicoPlacas,
            undefined);
        this.contexto = this;
    }

}