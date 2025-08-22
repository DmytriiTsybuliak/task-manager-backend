import { Router } from 'express';
import { loginCtrl, logoutCtrl, signupCtrl } from '../contollers/authController';

const authRouter = Router();

authRouter.post('/login', loginCtrl);
authRouter.post('/signup', signupCtrl);
authRouter.delete('/logout', logoutCtrl);

export default authRouter;
