import { Router } from 'express';
import taskRouter from './taskRouter';
import authRouter from './authRouter';

const router = Router();
router.use('/auth', authRouter);
router.use('/tasks', taskRouter);

export default router;
