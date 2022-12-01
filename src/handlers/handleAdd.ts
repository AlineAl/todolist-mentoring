import React from "react";
import { TodoType } from "../types";

interface IHandleAdd {
  array: TodoType[];
  setArray: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
}

export const handleAdd = ({ array, setArray, setTodo, todo }: IHandleAdd) => {
  const id = array.length;
  setArray([...array, { content: todo, id: id + 1 }]);
  setTodo("");
};
