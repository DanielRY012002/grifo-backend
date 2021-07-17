import { Router} from 'express'
const router = Router()
import * as empleadoCtrl from '../controllers/empleado.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', checkToken, empleadoCtrl.getEmpleados);
//router.get('/:id', rolesCtrl.getRolbyId);
router.post('/',checkToken, empleadoCtrl.crearempleado);
//router.put('/:id', rolesCtrl.updateRol);
//router.delete('/:id', rolesCtrl.deleteRol);
export default router;