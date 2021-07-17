import { Router} from 'express'
const router = Router();
import * as productoCtrl from '../controllers/productos.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', productoCtrl.getProductos);
//router.get('/:id', rolesCtrl.getRolbyId);
// router.post('/',checkToken ,ventaCtrl.productoCtrl);
//router.put('/:id', rolesCtrl.updateRol);
//router.delete('/:id', rolesCtrl.deleteRol);

export default router;