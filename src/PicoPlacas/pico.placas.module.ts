
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PicoPlacasEntity } from './pico-placas.entity';
import { PicoPlacasService } from './pico-placas.service';
import { PicoPlacasController } from './pico-placas.controller';


@Module({
  imports:[TypeOrmModule.forFeature([PicoPlacasEntity],"default")],
  providers:[PicoPlacasService],
  controllers:[PicoPlacasController],
  exports:[PicoPlacasService]
})
export class PicoPlacasModule {
}
