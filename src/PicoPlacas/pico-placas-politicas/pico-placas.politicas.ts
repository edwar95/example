import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.pico-placas.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.pico-placas.politicas';
import { COUNT_POLITICAS } from './count.pico-placas.politicas';
import { FIND_ONE_POLITICAS } from './find-one.pico-placas.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.pico-placas.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.pico-placas.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.pico-placas.politicas';

export const politicasPicoPlacas: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};