import { ContactoController } from './contacto.controller';
import { ContactoService } from './contacto.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoEntity } from './contacto.entity';


@Module({
  imports:[TypeOrmModule.forFeature([ContactoEntity],"default")],
  providers:[ContactoService],
  controllers:[ContactoController],
  exports:[ContactoService]
})
export class ContactoModule {
}
