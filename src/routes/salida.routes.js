import { Router} from 'express'
const router = Router();
import * as salidaCtrl from '../controllers/salida.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', checkToken, salidaCtrl.getSalidas);
router.get('/:id', checkToken, salidaCtrl.getSalidasbyId);
router.get('/detalle/:id', checkToken, salidaCtrl.getDetalleSalidabyId);
router.post('/',checkToken ,salidaCtrl.createSalida);
router.put('/cerrar/salida/:id', salidaCtrl.cerrarSalida);
//router.delete('/:id', rolesCtrl.deleteRol);

export default router;