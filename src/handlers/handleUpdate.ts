import React from "react";
import { TodoType } from "../types";

interface IHandleUpdate {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  id: string;
  value: string;
}

export const handleUpdate = ({ id, value, setTodos }: IHandleUpdate) => {
  const updateTodo = (todos: TodoType[]) =>
    todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: value };
      }
      return todo;
    });
  setTodos((todos) => updateTodo(todos));
};
