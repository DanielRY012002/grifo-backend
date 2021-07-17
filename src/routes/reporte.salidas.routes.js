import { Router} from 'express'
const router = Router();
import * as reporteSalidaCtrl from '../controllers/reportes_salida.controller'
const {checkToken} = require('../auth/token_validation');
router.get('/detalle/:id',checkToken ,reporteSalidaCtrl.reporteSalidaDetalle);
router.get('/totales/:id',checkToken ,reporteSalidaCtrl.reporteSalidaTotales);
router.get('/cobranza/:id/:fecha',checkToken ,reporteSalidaCtrl.reporteCobranzaSalida);
router.get('/cobranza/detalle/:id/:fecha',checkToken ,reporteSalidaCtrl.reporteCobranzaDetalleSalida);
export default router;