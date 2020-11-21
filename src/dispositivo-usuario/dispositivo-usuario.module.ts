import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivoUsuarioService } from './dispositivo-usuario.service';
import { DispositivoUsuarioEntity } from './dispositivo-usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DispositivoUsuarioEntity],"default")],
  providers:[DispositivoUsuarioService],
  exports:[DispositivoUsuarioService]
})
export class DispositivoUsuarioModule {}
