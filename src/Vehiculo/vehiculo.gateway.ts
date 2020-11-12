import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { VehiculoService } from './vehiculo.service';
import { VehiculoCreateDto } from './vehiculo-create-dto/vehiculo-create-dto';
import { VehiculoUpdateDto } from './vehiculo-update-dto/vehiculo-update-dto';
import { politicasVehiculo } from './vehiculo-politicas/vehiculo.politicas';
import { mensajesVehiculo } from './vehiculo-mensajes/vehiculo.mensajes';

@WebSocketGateway(3001, { namespace: '/vehiculo' })
export class VehiculoGateway extends PrincipalGateway {
    constructor(private readonly _vehiculoService: VehiculoService) {
        super(
            'http://localhost:3001',
            '/vehiculo',
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
            politicasVehiculo, // politicas de seguridad
            _vehiculoService, // servicio
            {  // Dto
                CreateDto: VehiculoCreateDto,
                UpdateDto: VehiculoUpdateDto
            },
            0, // take
            30, // skip
            mensajesVehiculo,
            undefined);
        this.contexto = this;
    }

}