import { Router} from 'express'
const router = Router();

import * as gastoCtrl from '../controllers/gasto.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, gastoCtrl.getGastos);
router.get('/salida/dia/:id', checkToken, gastoCtrl.getGastosSalida);
router.get('/salida/total/:id', checkToken, gastoCtrl.getGastosTotalSalida);
router.post('/', checkToken, gastoCtrl.createGasto);
//router.put('/:id', checkToken, rolesCtrl.updateRol);
//router.delete('/:id', checkToken, rolesCtrl.deleteRol);/

export default router;