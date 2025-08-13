import { TaskDB } from '../db/models/taskSchema';
import { AddTask, UpdateTask } from '../validation/task';

export const addTask = async (data: AddTask) => {
  const { title, description, dueDate, priority, isCompleted, tags, subtasks, userId } = data;

  return await TaskDB.create({
    title,
    description,
    dueDate,
    priority,
    isCompleted,
    tags,
    subtasks,
    userId,
  });
};

export const updateTaskById = async (id: string, data: UpdateTask) => {
  const { title, description, dueDate, priority, isCompleted, tags, subtasks } = data;

  return await TaskDB.findByIdAndUpdate(
    id,
    {
      title,
      description,
      dueDate,
      priority,
      isCompleted,
      tags,
      subtasks,
    },
    { new: true, runValidators: true }
  );
};

export const getTaskById = async (id: string) => {
  return await TaskDB.findOne({ _id: id });
};

export const getAllTasks = async () => {
  return await TaskDB.find({});
};

export const deleteTaskById = async (id: string) => {
  return await TaskDB.findByIdAndDelete(id);
};
