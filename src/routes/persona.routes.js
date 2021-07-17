import { Router} from 'express'
const router = Router()
import * as personCtrl from '../controllers/persona.controller'
const {checkToken} = require('../auth/token_validation');
router.post('/', checkToken, personCtrl.createPerson);

export default router;