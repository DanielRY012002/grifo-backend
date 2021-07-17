import { Router} from 'express'
const router = Router();

import * as cisternaCtrl from '../controllers/cisterna.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, cisternaCtrl.getCisternas);
router.get('/:id', checkToken, cisternaCtrl.getCisternabyId);
router.post('/', checkToken, cisternaCtrl.createCisterna);
router.put('/:id', checkToken, cisternaCtrl.updateCisterna);
router.delete('/:id', checkToken, cisternaCtrl.deleteCisterna);

export default router;