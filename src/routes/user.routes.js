import { Router} from 'express'
const router = Router()
import * as userCtrl from '../controllers/user.controller'
const {checkToken} = require('../auth/token_validation');

router.post('/', checkToken, userCtrl.createUser);

export default router;