import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from '@nestjs/graphql';
import { PrincipalResolver } from '@manticore-labs/nest';
import { DispositivoService } from './dispositivo.service';
import { DispositivoCreateDto } from './dispositivo-create-dto/dispositivo-create-dto';
import { DispositivoUpdateDto } from './dispositivo-update-dto/dispositivo-update-dto';
import { politicasDispositivo } from './dispositivo-politicas/dispositivo.politicas';
import { mensajesDispositivo } from './dispositivo-mensajes/dispositivo.mensajes';
import {Observable} from 'rxjs';

@Resolver('Dispositivo')
export class DispositivoResolver extends PrincipalResolver {
    constructor(private readonly _dispositivoService: DispositivoService) {
        super(politicasDispositivo, // politicas de seguridad
            _dispositivoService,
            { // Dtos
                CreateDto: DispositivoCreateDto,
                UpdateDto: DispositivoUpdateDto
            },
            0, // skip
            30, // take
            mensajesDispositivo,
            undefined // contexto
        );
        this.contexto = this;
    }

    @Query('findAllDispositivo')
    findAllDispositivo(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.devolverRespuesta('findAll', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findWhereOrDispositivo')
    findWhereOrDispositivo(
            @Args('criterioBusqueda') criterioBusqueda: string,
            @Args() args,
            @Context() context,
            @Info() info,
            @Parent() parent,
            @Root() root,
    ) {
        return this.devolverRespuesta('findWhereOr', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOneDispositivoById')
    findOneDispositivoById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOneDispositivo')
    createOneDispositivo(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOneDispositivo')
    deleteOneDispositivo(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOneDispositivo')
    updateOneDispositivo(
        @Args('id') id,
        @Args('registroAActualizar') registroAActualizar,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.updateOne(id, registroAActualizar, args, context, info, parent, root);
    }

    devolverRespuesta(tipo, criterioBusqueda, args, context, info, parent, root) {
        return new Promise((resolve, reject) => {
            let servicio;
            if (tipo === 'findAll') {
                servicio = this.findAll(criterioBusqueda, args, context, info, parent, root);
            } else {
                servicio = this.findWhereOr(criterioBusqueda, args, context, info, parent, root);
            }
            servicio
                .then(
                    (r: Observable<[[any], 0]>) => {
                        r.subscribe(
                            (c) => {
                                resolve({registros: c[0], numero: c[1]});
                            }
                        );

                    }
                )
                .catch(
                    (e) => {
                        console.error('Error', e);
                        resolve({registros: [], numero: 0});
                    }
                );
        });
    }

}