import React from "react";
import { TodoType } from "../types";

interface IHandleRemove {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  id: string;
}

export const handleRemove = ({ id, setTodos }: IHandleRemove) => {
  setTodos((todos) => todos.filter((el) => el.id !== id));
};
