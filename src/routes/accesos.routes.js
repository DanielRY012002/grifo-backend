import { Router} from 'express'
const router = Router();

import * as accesosCtrl from '../controllers/acceso.controller'
const {checkToken} = require('../auth/token_validation');

router.get('/', checkToken, accesosCtrl.getAccesos);
router.get('/:id', checkToken, accesosCtrl.getAccesosbyId);
router.post('/', checkToken, accesosCtrl.createAccesos);
router.put('/:id', checkToken, accesosCtrl.updateAcceso);
router.delete('/:id', checkToken, accesosCtrl.deleteAcceso);

export default router;