
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugarEntity } from './lugar.entity';
import { LugarService } from './lugar.service';
import { LugarController } from './lugar.controller';


@Module({
  imports:[TypeOrmModule.forFeature([LugarEntity],"default")],
  providers:[LugarService],
  controllers:[LugarController],
  exports:[LugarService]
})
export class LugarModule {
}
