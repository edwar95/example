import { Injectable } from '@nestjs/common';
import { ContactoUpdateDto } from './contacto-update-dto/contacto-update-dto';
import { ContactoCreateDto } from './contacto-create-dto/contacto-create-dto';
import { ContactoEntity } from './contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrincipalService } from '@manticore-labs/nest';

@Injectable()
export class ContactoService extends PrincipalService<
    ContactoEntity,
    ContactoCreateDto,
    ContactoUpdateDto> {
    constructor(@InjectRepository(ContactoEntity)
    private readonly _contactoRepository: Repository<ContactoEntity>) {
        super(_contactoRepository, ContactoEntity, 'default');
    }
}
