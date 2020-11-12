
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from './vehiculo.entity';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';


@Module({
  imports:[TypeOrmModule.forFeature([VehiculoEntity],"default")],
  providers:[VehiculoService],
  controllers:[VehiculoController],
  exports:[VehiculoService]
})
export class VehiculoModule {
}
