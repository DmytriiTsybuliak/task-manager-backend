import { TaskDB } from '../db/models/taskSchema';
import { UserDB } from '../db/models/userSchema';
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

export const getTaskById = async (userId: string, id: string) => {
  const user = await UserDB.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return await TaskDB.find({ _id: id, userId });
};

export const getAllTasks = async (userId: string) => {
  return await TaskDB.find({ userId });
};

export const deleteTaskById = async (id: string) => {
  return await TaskDB.findByIdAndDelete(id);
};
