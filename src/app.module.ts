import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoEntity } from './Contacto/contacto.entity';
import { DispositivoEntity } from './Dispositivo/dispositivo.entity';
import { VehiculoEntity } from './Vehiculo/vehiculo.entity';
import { DatosUsuarioEntity } from './DatosUsuario/datos-usuario.entity';
import { ContactoModule } from './Contacto/contacto.module';
import { DatosUsuarioModule } from './DatosUsuario/datos.usuario.module';
import { DispositivoModule } from './Dispositivo/dispositivo.module';
import { VehiculoModule } from './Vehiculo/vehiculo.module';
import { HorarioModule } from './Horario/horario.module';
import { HorarioEntity } from './Horario/horario.entity';
import { PicoPlacasEntity } from './PicoPlacas/pico-placas.entity';
import { LugarModule } from './Lugar/lugar.module';
import { LugarEntity } from './Lugar/lugar.entity';
import { DispositivoUsuarioModule } from './dispositivo-usuario/dispositivo-usuario.module';
import { DispositivoUsuarioEntity } from './dispositivo-usuario/dispositivo-usuario.entity';


@Module({
  imports: [
    ContactoModule,
    DatosUsuarioModule,
    DispositivoModule,
    VehiculoModule,
    HorarioModule,
    LugarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [
        ContactoEntity,
        DatosUsuarioEntity,
        DispositivoEntity,
        VehiculoEntity,
        HorarioEntity,
        PicoPlacasEntity,
        LugarEntity,
        DispositivoUsuarioEntity
      ],
      synchronize: true,
      ssl:false
    }),
    DispositivoUsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
