import { Router} from 'express'
const router = Router()
import * as clienteCtrl from '../controllers/cliente.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', checkToken, clienteCtrl.getClientes);
router.get('/:id', checkToken, clienteCtrl.getClientebyId);
router.post('/',checkToken ,clienteCtrl.createCliente);
router.get('/deudas/:id',checkToken ,clienteCtrl.deudasCliente);
router.get('/zonas/:id', clienteCtrl.getClientesPorZona);
//router.delete('/:id', rolesCtrl.deleteRol);

export default router;