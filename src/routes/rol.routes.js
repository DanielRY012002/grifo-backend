import { Router} from 'express'
const router = Router();

import * as rolesCtrl from '../controllers/rol.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, rolesCtrl.getRoles);
router.get('/:id', checkToken, rolesCtrl.getRolbyId);
router.post('/', checkToken, rolesCtrl.createRol);
router.put('/:id', checkToken, rolesCtrl.updateRol);
router.delete('/:id', checkToken, rolesCtrl.deleteRol);

export default router;