import express from 'express';
import middleware from '../app/middlewares/index.js';

import { getUser } from '../app/controllers/user.controller.js';

const router = express.Router();

router.get('/users', [middleware.auth], getUser);

export default router;