import { Router} from 'express'
const router = Router();

import * as cargoCtrl from '../controllers/cargo.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, cargoCtrl.getCargos);
router.get('/:id', checkToken, cargoCtrl.getCargobyId);
router.post('/', checkToken, cargoCtrl.createCargos);
router.put('/:id', checkToken, cargoCtrl.updateCargo);
router.delete('/:id', checkToken, cargoCtrl.deleteCargo);

export default router;