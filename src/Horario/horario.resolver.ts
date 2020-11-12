import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from '@nestjs/graphql';
import { PrincipalResolver } from '@manticore-labs/nest';
import { HorarioService } from './horario.service';
import { HorarioCreateDto } from './horario-create-dto/horario-create-dto';
import { HorarioUpdateDto } from './horario-update-dto/horario-update-dto';
import { politicasHorario } from './horario-politicas/horario.politicas';
import { mensajesHorario } from './horario-mensajes/horario.mensajes';
import {Observable} from 'rxjs';

@Resolver('Horario')
export class HorarioResolver extends PrincipalResolver {
    constructor(private readonly _horarioService: HorarioService) {
        super(politicasHorario, // politicas de seguridad
            _horarioService,
            { // Dtos
                CreateDto: HorarioCreateDto,
                UpdateDto: HorarioUpdateDto
            },
            0, // skip
            30, // take
            mensajesHorario,
            undefined // contexto
        );
        this.contexto = this;
    }

    @Query('findAllHorario')
    findAllHorario(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.devolverRespuesta('findAll', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findWhereOrHorario')
    findWhereOrHorario(
            @Args('criterioBusqueda') criterioBusqueda: string,
            @Args() args,
            @Context() context,
            @Info() info,
            @Parent() parent,
            @Root() root,
    ) {
        return this.devolverRespuesta('findWhereOr', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOneHorarioById')
    findOneHorarioById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOneHorario')
    createOneHorario(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOneHorario')
    deleteOneHorario(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOneHorario')
    updateOneHorario(
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