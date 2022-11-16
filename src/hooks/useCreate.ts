import React from "react";
import { TodoType } from "../types";

interface IUseCreate {
  todo: TodoType;
  handleIncrement: any;
  id: number;
  array: TodoType[];
  setArray: any;
  setTodo: any;
}

export default function useCreate({
  todo,
  handleIncrement,
  setArray,
  setTodo,
  array,
  id,
}: IUseCreate) {
  if (todo.content.length > 0) {
    handleIncrement();
    setArray([...array, todo]);
    setTodo({ id: id, content: "" });
  }
}
