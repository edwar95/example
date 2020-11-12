import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from '@nestjs/graphql';
import { PrincipalResolver } from '@manticore-labs/nest';
import { PicoPlacasService } from './pico-placas.service';
import { PicoPlacasCreateDto } from './pico-placas-create-dto/pico-placas-create-dto';
import { PicoPlacasUpdateDto } from './pico-placas-update-dto/pico-placas-update-dto';
import { politicasPicoPlacas } from './pico-placas-politicas/pico-placas.politicas';
import { mensajesPicoPlacas } from './pico-placas-mensajes/pico-placas.mensajes';
import {Observable} from 'rxjs';

@Resolver('PicoPlacas')
export class PicoPlacasResolver extends PrincipalResolver {
    constructor(private readonly _picoPlacasService: PicoPlacasService) {
        super(politicasPicoPlacas, // politicas de seguridad
            _picoPlacasService,
            { // Dtos
                CreateDto: PicoPlacasCreateDto,
                UpdateDto: PicoPlacasUpdateDto
            },
            0, // skip
            30, // take
            mensajesPicoPlacas,
            undefined // contexto
        );
        this.contexto = this;
    }

    @Query('findAllPicoPlacas')
    findAllPicoPlacas(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.devolverRespuesta('findAll', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findWhereOrPicoPlacas')
    findWhereOrPicoPlacas(
            @Args('criterioBusqueda') criterioBusqueda: string,
            @Args() args,
            @Context() context,
            @Info() info,
            @Parent() parent,
            @Root() root,
    ) {
        return this.devolverRespuesta('findWhereOr', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOnePicoPlacasById')
    findOnePicoPlacasById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOnePicoPlacas')
    createOnePicoPlacas(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOnePicoPlacas')
    deleteOnePicoPlacas(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOnePicoPlacas')
    updateOnePicoPlacas(
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