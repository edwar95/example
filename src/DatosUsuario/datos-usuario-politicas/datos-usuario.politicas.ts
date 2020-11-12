import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.datos-usuario.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.datos-usuario.politicas';
import { COUNT_POLITICAS } from './count.datos-usuario.politicas';
import { FIND_ONE_POLITICAS } from './find-one.datos-usuario.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.datos-usuario.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.datos-usuario.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.datos-usuario.politicas';

export const politicasDatosUsuario: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};