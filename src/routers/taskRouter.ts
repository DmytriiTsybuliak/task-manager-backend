import { Router } from 'express';
import controllerWrapper from '../utils/controllerWr';
import {
  addTaskCtrl,
  deleteTaskCtrl,
  getAllTasksCtrl,
  getTaskCtrl,
  updateTaskCtrl,
} from '../contollers/taskController';
import { validateBody } from '../middlewares/validate';
import { TaskSchema, UpdateTaskSchema } from '../validation/task';

const taskRouter = Router();

taskRouter.post('/', validateBody(TaskSchema), controllerWrapper(addTaskCtrl));
taskRouter.get('/', controllerWrapper(getAllTasksCtrl));
taskRouter.get('/:id', controllerWrapper(getTaskCtrl));
taskRouter.delete('/:id', controllerWrapper(deleteTaskCtrl));
taskRouter.patch('/:id', validateBody(UpdateTaskSchema), controllerWrapper(updateTaskCtrl));

export default taskRouter;
