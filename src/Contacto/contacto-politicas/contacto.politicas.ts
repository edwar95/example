import { FuncionesSeguridad } from '@manticore-labs/nest';
import { FIND_ALL_POLITICAS } from './find-all.contacto.politicas';
import { FIND_WHERE_OR_POLITICAS } from './find-where-or.contacto.politicas';
import { COUNT_POLITICAS } from './count.contacto.politicas';
import { FIND_ONE_POLITICAS } from './find-one.contacto.politicas';
import { CREATE_ONE_POLITICAS } from './create-one.contacto.politicas';
import { UPDATE_ONE_POLITICAS } from './update-one.contacto.politicas';
import { DELETE_ONE_POLITICAS } from './delete-one.contacto.politicas';

export const politicasContacto: FuncionesSeguridad = {
    findAll: FIND_ALL_POLITICAS,
    findOne: FIND_ONE_POLITICAS,
    createOne: CREATE_ONE_POLITICAS,
    updateOne: UPDATE_ONE_POLITICAS,
    deleteOne: DELETE_ONE_POLITICAS,
    count: COUNT_POLITICAS,
    findWhereOr: FIND_WHERE_OR_POLITICAS,
};