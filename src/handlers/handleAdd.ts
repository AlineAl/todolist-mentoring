import React from "react";
import { TodoType } from "../types";

interface IHandleAdd {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const handleAdd = ({ setTodos, setValue, value }: IHandleAdd) => {
  const id = Math.floor(Math.random());
  setTodos((todos) => [...todos, { content: value, id }]);
  setValue("");
};
