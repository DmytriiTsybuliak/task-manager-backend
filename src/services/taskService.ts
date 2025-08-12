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

export const updateTask = async (id: string, data: UpdateTask) => {
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
