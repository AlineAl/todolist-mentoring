import React from "react";
import { TodoType } from "../types";

interface IHandleUpdate {
  array: TodoType[];
  setArray: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleUpdate = (
  id: number,
  content: string,
  { array, setArray, setOpen }: IHandleUpdate
) => {
  const findTodo = array.find((item) => item?.id === id);
  findTodo ? (findTodo.content = content) : null;
  setArray([...array]);
  setOpen(false);
};
