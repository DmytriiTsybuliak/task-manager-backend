export interface Subtask {
  title: string;
  status: 'todo' | 'done';
}

export interface AddTaskData {
  title: string;
  description?: string;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  isCompleted: boolean;
  tags?: string[];
  subtasks?: Subtask[];
  userId: string;
}
