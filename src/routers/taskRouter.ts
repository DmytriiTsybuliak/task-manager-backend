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
import { authMiddleware } from '../middlewares/authMiddleware';

const taskRouter = Router();
taskRouter.use(authMiddleware); // Apply auth middleware to all task routes
taskRouter.post('/', validateBody(TaskSchema), controllerWrapper(addTaskCtrl));
taskRouter.get('/', controllerWrapper(getAllTasksCtrl));
taskRouter.get('/:id', controllerWrapper(getTaskCtrl));
taskRouter.delete('/:id', controllerWrapper(deleteTaskCtrl));
taskRouter.patch('/:id', validateBody(UpdateTaskSchema), controllerWrapper(updateTaskCtrl));

export default taskRouter;
