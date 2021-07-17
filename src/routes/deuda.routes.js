import { Router} from 'express'
const router = Router();

import * as deudaCtrl from '../controllers/deuda.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/', checkToken, deudaCtrl.getDeudas);
router.get('/pagos/', checkToken, deudaCtrl.getPagos);
//router.get('/:id', checkToken, cargoCtrl.getCargobyId);
router.post('/', checkToken, deudaCtrl.registrarDeuda);
router.put('/cobranzas/:id', deudaCtrl.cobrarDeuda);
//router.delete('/:id', checkToken, cargoCtrl.deleteCargo);
router.get('/total/deuda/cliente/:id', checkToken, deudaCtrl.totalDeudaCliente);

export default router;