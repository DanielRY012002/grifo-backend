import { Router} from 'express'
const router = Router();

import * as proveedorCtrl from '../controllers/proveedor.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, proveedorCtrl.getProveedor);
router.get('/:id', checkToken, proveedorCtrl.getProveedorbyId);
router.post('/', checkToken, proveedorCtrl.createProveedor);
router.put('/:id', checkToken, proveedorCtrl.updateProveedor);
router.delete('/:id', checkToken, proveedorCtrl.deleteProveedor);

export default router;