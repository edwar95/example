import { WebSocketGateway } from '@nestjs/websockets';
import { PrincipalGateway } from '@manticore-labs/nest';
import { ContactoService } from './contacto.service';
import { ContactoCreateDto } from './contacto-create-dto/contacto-create-dto';
import { ContactoUpdateDto } from './contacto-update-dto/contacto-update-dto';
import { politicasContacto } from './contacto-politicas/contacto.politicas';
import { mensajesContacto } from './contacto-mensajes/contacto.mensajes';

@WebSocketGateway(3001, { namespace: '/contacto' })
export class ContactoGateway extends PrincipalGateway {
    constructor(private readonly _contactoService: ContactoService) {
        super(
            'http://localhost:3001',
            '/contacto',
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
            politicasContacto, // politicas de seguridad
            _contactoService, // servicio
            {  // Dto
                CreateDto: ContactoCreateDto,
                UpdateDto: ContactoUpdateDto
            },
            0, // take
            30, // skip
            mensajesContacto,
            undefined);
        this.contexto = this;
    }

}