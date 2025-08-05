import z from 'zod';

const TaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
  isCompleted: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  subtasks: z
    .array(
      z.object({
        title: z.string().min(1, 'Subtask title is required'),
        status: z.enum(['todo', 'done']).default('todo'),
      })
    )
    .optional(),
  userId: z.uuid('Invalid user ID format').optional(),
});

export type Task = z.infer<typeof TaskSchema>;

export default TaskSchema;
