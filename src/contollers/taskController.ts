import { addTask, updateTask } from '../services/taskService';
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

export const UpdateTaskCtrl: Controller = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);
  // Assuming there's a service function to update the task
  const updatedTask = await updateTask(id, data);
  res.status(200).json({
    status: 200,
    message: 'Successfully updated task',
    data: updatedTask,
  });
};
