
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosUsuarioEntity } from './datos-usuario.entity';
import { DatosUsuarioService } from './datos-usuario.service';
import { DatosUsuarioController } from './datos-usuario.controller';


@Module({
  imports:[TypeOrmModule.forFeature([DatosUsuarioEntity],"default")],
  providers:[DatosUsuarioService],
  controllers:[DatosUsuarioController],
  exports:[DatosUsuarioService]
})
export class DatosUsuarioModule {
}
