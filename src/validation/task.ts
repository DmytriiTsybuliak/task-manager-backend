import z from 'zod';

export const TaskSchema = z
  .object({
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
        }),
      )
      .optional(),
    userId: z.string().length(24, 'Invalid ObjectId format').optional(),
  })
  .strict();

export const UpdateTaskSchema = TaskSchema.partial();

export type AddTask = z.infer<typeof TaskSchema>;
export type UpdateTask = z.infer<typeof UpdateTaskSchema>;
