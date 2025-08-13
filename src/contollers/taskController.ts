import {
  addTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from '../services/taskService';
import { Controller } from '../utils/controllerWr';

export const addTaskCtrl: Controller = async (req, res) => {
  const data = req.body;
  const tasks = await addTask(data);
  res.status(201).json({
    status: 201,
    message: 'Successfully added task',
    data: tasks,
  });
};

export const updateTaskCtrl: Controller = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedTask = await updateTaskById(id, data);
  res.status(200).json({
    status: 200,
    message: 'Successfully updated task',
    data: updatedTask,
  });
};

export const getTaskCtrl: Controller = async (req, res) => {
  const { id } = req.params;
  const task = await getTaskById(id);
  if (!task) {
    res.status(404).json({
      status: 404,
      message: 'Task not found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved task',
    data: task,
  });
};

export const getAllTasksCtrl: Controller = async (req, res) => {
  const tasks = await getAllTasks();
  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved all tasks',
    data: tasks,
  });
};

export const deleteTaskCtrl: Controller = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTaskById(id);
  if (!deletedTask) {
    res.status(404).json({
      status: 404,
      message: 'Task not found',
    });
    return;
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully deleted task',
    data: deletedTask,
  });
};
