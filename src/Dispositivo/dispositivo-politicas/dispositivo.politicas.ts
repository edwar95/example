import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.dispositivo.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.dispositivo.politicas';
import { COUNT_POLITICAS } from './count.dispositivo.politicas';
import { FIND_ONE_POLITICAS } from './find-one.dispositivo.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.dispositivo.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.dispositivo.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.dispositivo.politicas';

export const politicasDispositivo: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};