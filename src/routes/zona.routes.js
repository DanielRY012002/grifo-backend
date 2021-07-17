import { Router} from 'express'
const router = Router();

import * as zonasCtrl from '../controllers/zona.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, zonasCtrl.getZonas);
router.get('/distritos/:id', checkToken, zonasCtrl.getDistritosByZonas);
//router.get('/:id', checkToken, rolesCtrl.getRolbyId);
//router.post('/', checkToken, rolesCtrl.createRol);
//router.put('/:id', checkToken, rolesCtrl.updateRol);
//router.delete('/:id', checkToken, rolesCtrl.deleteRol);

export default router;