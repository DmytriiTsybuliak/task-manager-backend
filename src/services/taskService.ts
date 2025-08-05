import { TaskDB } from '../db/models/taskSchema';
import { AddTaskData } from '../types/task';

export const addTask = async (data: AddTaskData) => {
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
