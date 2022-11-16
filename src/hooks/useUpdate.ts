import React from "react";
import { TodoType } from "../types";

interface IUseUpdate {
  array: TodoType[];
  todo: TodoType;
  setArray: any;
  id: number;
}

export default function useUpdate({ array, todo, setArray, id }: IUseUpdate) {
  const findIndex = array?.findIndex((el) => el.id === id);
  const newContent = todo.content;
  array[findIndex].content = newContent;
  setArray([...array]);
}
