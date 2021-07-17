import { Router} from 'express'
const router = Router();
import * as compraCtrl from '../controllers/compras.controller'
const {checkToken} = require('../auth/token_validation');
//router.get('/', rolesCtrl.getRoles);
//router.get('/:id', rolesCtrl.getRolbyId);
router.post('/',checkToken ,compraCtrl.createCompras);
//router.put('/:id', rolesCtrl.updateRol);
//router.delete('/:id', rolesCtrl.deleteRol);

export default router;