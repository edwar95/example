import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.lugar.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.lugar.politicas';
import { COUNT_POLITICAS } from './count.lugar.politicas';
import { FIND_ONE_POLITICAS } from './find-one.lugar.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.lugar.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.lugar.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.lugar.politicas';

export const politicasLugar: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};