import express from 'express';
import middleware from '../app/middlewares/index.js';

import { createUser} from '../app/controllers/user.controller.js';
import { login, logout } from '../app/services/auth.service.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', login);
router.post('/logout', [middleware.auth], logout);

export default router;