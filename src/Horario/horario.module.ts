
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioEntity } from './horario.entity';
import { HorarioService } from './horario.service';
import { HorarioController } from './horario.controller';


@Module({
  imports:[TypeOrmModule.forFeature([HorarioEntity],"default")],
  providers:[HorarioService],
  controllers:[HorarioController],
  exports:[HorarioService]
})
export class HorarioModule {
}
