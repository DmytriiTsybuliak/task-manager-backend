import { Router } from 'express';
import controllerWrapper from '../utils/controllerWr';
import { addTaskCtrl, UpdateTaskCtrl } from '../contollers/taskController';
import { validateBody } from '../middlewares/validate';
import { TaskSchema, UpdateTaskSchema } from '../validation/task';

const taskRouter = Router();

taskRouter.post('/', validateBody(TaskSchema), controllerWrapper(addTaskCtrl));
taskRouter.put('/:id', validateBody(UpdateTaskSchema), controllerWrapper(UpdateTaskCtrl));

export default taskRouter;
