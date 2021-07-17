import { Router} from 'express'
const router = Router();
import * as ventaCtrl from '../controllers/ventas.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', ventaCtrl.getVentas);
router.get('/cliente/:id', checkToken, ventaCtrl.getVentasByClienteId)
//router.get('/:id', rolesCtrl.getRolbyId);
//router.get('/salida/diaria/:id',checkToken, ventaCtrl.getReporteVentasDiaxSalida);
router.post('/',checkToken ,ventaCtrl.createVentas);
//router.put('/:id', rolesCtrl.updateRol);
//router.delete('/:id', rolesCtrl.deleteRol);

export default router;