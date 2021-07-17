import { Router} from 'express'
const router = Router();

import * as obsCtrl from '../controllers/observacion.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, obsCtrl.getObs);
//router.get('/:id', checkToken, cargoCtrl.getCargobyId);
router.post('/', checkToken, obsCtrl.createObs);
//router.put('/:id', checkToken, cargoCtrl.updateCargo);
//router.delete('/:id', checkToken, cargoCtrl.deleteCargo);

export default router;