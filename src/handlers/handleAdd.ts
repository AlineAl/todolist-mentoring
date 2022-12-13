import React from "react";
import { TodoType } from "../types";
import { v4 as uuidv4 } from "uuid";

interface IHandleAdd {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const handleAdd = ({ setTodos, setValue, value }: IHandleAdd) => {
  const id = uuidv4();
  setTodos((todos) => [...todos, { content: value, id }]);
  setValue("");
};
