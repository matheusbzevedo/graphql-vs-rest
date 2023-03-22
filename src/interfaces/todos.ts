export interface ITodos {
  body?: string;
  id: number;
  title?: string;
  userId?: number;
}

export type TCreateTodo = Omit<ITodos, 'id'>;
