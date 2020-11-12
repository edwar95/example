import { Controller } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoUpdateDto } from './contacto-update-dto/contacto-update-dto';
import { ContactoCreateDto } from './contacto-create-dto/contacto-create-dto';
import { politicasContacto } from './contacto-politicas/contacto.politicas';
import { mensajesContacto } from './contacto-mensajes/contacto.mensajes';
import { PrincipalController } from '@manticore-labs/nest';

@Controller('contacto')
export class ContactoController extends PrincipalController<
    ContactoCreateDto,
    ContactoUpdateDto> {
    constructor(private readonly _contactoService: ContactoService) {
        super( politicasContacto, // politicas de seguridad
        _contactoService, // servicio
            { // Dto
                CreateDto: ContactoCreateDto,
                UpdateDto: ContactoUpdateDto
            },
            0, // skip
            30, // take
            mensajesContacto,
            undefined // contexto
            );
        this.contexto = this;
    }
}
