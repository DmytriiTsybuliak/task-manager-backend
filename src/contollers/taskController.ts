import { addTask } from '../services/taskService';
import { Controller } from '../utils/controllerWr';

export const addTaskCtrl: Controller = async (req, res) => {
  const data = req.body;
  console.log(data);
  const tasks = await addTask(data);
  res.status(201).json({
    status: 201,
    message: 'Successfully added task',
    data: tasks,
  });
};
