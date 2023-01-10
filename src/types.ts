export type TodoType = {
  id: string;
  content: string;
};

export type TodoBisType = {
  id: string;
  content: string;
  isLiked: boolean;
  date: Date;
  subTodo: TodoType[];
  category: string;
};
