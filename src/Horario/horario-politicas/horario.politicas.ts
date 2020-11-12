import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.horario.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.horario.politicas';
import { COUNT_POLITICAS } from './count.horario.politicas';
import { FIND_ONE_POLITICAS } from './find-one.horario.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.horario.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.horario.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.horario.politicas';

export const politicasHorario: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};