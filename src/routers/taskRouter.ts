import { Router } from 'express';
import controllerWrapper from '../utils/controllerWr';
import { addTaskCtrl } from '../contollers/taskController';

const taskRouter = Router();

// taskRouter.get('/');
taskRouter.post('/', controllerWrapper(addTaskCtrl));
// taskRouter.delete();

export default taskRouter;
