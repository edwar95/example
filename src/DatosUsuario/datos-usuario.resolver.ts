import { Resolver, Query, Args, Context, Info, Parent, Root, Mutation } from '@nestjs/graphql';
import { PrincipalResolver } from '@manticore-labs/nest';
import { DatosUsuarioService } from './datos-usuario.service';
import { DatosUsuarioCreateDto } from './datos-usuario-create-dto/datos-usuario-create-dto';
import { DatosUsuarioUpdateDto } from './datos-usuario-update-dto/datos-usuario-update-dto';
import { politicasDatosUsuario } from './datos-usuario-politicas/datos-usuario.politicas';
import { mensajesDatosUsuario } from './datos-usuario-mensajes/datos-usuario.mensajes';
import {Observable} from 'rxjs';

@Resolver('DatosUsuario')
export class DatosUsuarioResolver extends PrincipalResolver {
    constructor(private readonly _datosUsuarioService: DatosUsuarioService) {
        super(politicasDatosUsuario, // politicas de seguridad
            _datosUsuarioService,
            { // Dtos
                CreateDto: DatosUsuarioCreateDto,
                UpdateDto: DatosUsuarioUpdateDto
            },
            0, // skip
            30, // take
            mensajesDatosUsuario,
            undefined // contexto
        );
        this.contexto = this;
    }

    @Query('findAllDatosUsuario')
    findAllDatosUsuario(
        @Args('criterioBusqueda') criterioBusqueda: string,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.devolverRespuesta('findAll', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findWhereOrDatosUsuario')
    findWhereOrDatosUsuario(
            @Args('criterioBusqueda') criterioBusqueda: string,
            @Args() args,
            @Context() context,
            @Info() info,
            @Parent() parent,
            @Root() root,
    ) {
        return this.devolverRespuesta('findWhereOr', criterioBusqueda, args, context, info, parent, root);
    }

    @Query('findOneDatosUsuarioById')
    findOneDatosUsuarioById(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.findOneById(id, args, context, info, parent, root);
    }

    @Mutation('createOneDatosUsuario')
    createOneDatosUsuario(
        @Args('nuevoRegistro') nuevoRegistro,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.createOne(nuevoRegistro, args, context, info, parent, root);
    }

    @Mutation('deleteOneDatosUsuario')
    deleteOneDatosUsuario(
        @Args('id') id,
        @Args() args,
        @Context() context,
        @Info() info,
        @Parent() parent,
        @Root() root,
    ) {
        return this.deleteOne(id, args, context, info, parent, root);
    }

    @Mutation('updateOneDatosUsuario')
    updateOneDatosUsuario(
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