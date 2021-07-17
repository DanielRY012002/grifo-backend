import { Router} from 'express'
const router = Router();

import * as detalleSalCtrl from '../controllers/detalle_salida.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, detalleSalCtrl.getDetalleSalida);
router.get('/:id', checkToken, detalleSalCtrl.getDetalleSalidabyId);
//router.post('/', checkToken, rolesCtrl.createRol);
//router.put('/:id', checkToken, rolesCtrl.updateRol);
//router.delete('/:id', checkToken, rolesCtrl.deleteRol);

export default router;