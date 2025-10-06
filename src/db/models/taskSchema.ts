import { model, Schema, Types } from 'mongoose';

const SubtaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['todo', 'done'],
    default: 'todo',
  },
});

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    isCompleted: { type: Boolean, default: false },
    tags: [{ type: String }],
    subtasks: [SubtaskSchema],
    userId: { type: Types.ObjectId, ref: 'User', required: false },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        if ('createdAt' in ret) {
          delete ret.createdAt;
        }
        if ('updatedAt' in ret) {
          delete ret.updatedAt;
        }
        return ret;
      },
    },
    versionKey: false,
  },
);

export const TaskDB = model('Task', TaskSchema);
