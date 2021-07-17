import { Router} from 'express'
const router = Router();

import * as preciosCtrl from '../controllers/precio.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, preciosCtrl.getPrecios);
router.get('/:id', checkToken, preciosCtrl.getPreciobyId);
router.post('/', checkToken, preciosCtrl.createPrecio);
router.put('/:id', checkToken, preciosCtrl.updatePrecio);
//router.delete('/:id', checkToken, rolesCtrl.deleteRol);

export default router;