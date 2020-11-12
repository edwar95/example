
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivoEntity } from './dispositivo.entity';
import { DispositivoService } from './dispositivo.service';
import { DispositivoController } from './dispositivo.controller';


@Module({
  imports:[TypeOrmModule.forFeature([DispositivoEntity],"default")],
  providers:[DispositivoService],
  controllers:[DispositivoController],
  exports:[DispositivoService]
})
export class DispositivoModule {
}
