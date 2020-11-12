import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.vehiculo.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.vehiculo.politicas';
import { COUNT_POLITICAS } from './count.vehiculo.politicas';
import { FIND_ONE_POLITICAS } from './find-one.vehiculo.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.vehiculo.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.vehiculo.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.vehiculo.politicas';

export const politicasVehiculo: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};