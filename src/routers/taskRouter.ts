import { Router } from 'express';
import controllerWrapper from '../utils/controllerWr';
import { addTaskCtrl } from '../contollers/taskController';
import { validateBody } from '../middlewares/validate';
import TaskSchema from '../validation/task';

const taskRouter = Router();

// taskRouter.get('/');
taskRouter.post('/', validateBody(TaskSchema), controllerWrapper(addTaskCtrl));
// taskRouter.delete();

export default taskRouter;
