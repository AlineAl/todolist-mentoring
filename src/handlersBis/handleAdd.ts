import React from "react";
import { TodoBisType } from "../types";
import { v4 as uuidv4 } from "uuid";

interface IHandleAdd {
  setTodos: React.Dispatch<React.SetStateAction<TodoBisType[]>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const handleAdd = ({ setTodos, setValue, value }: IHandleAdd) => {
  const id = uuidv4();
  setTodos((todos) => [
    ...todos,
    { id, content: value, isLiked: false, date: new Date(), subTodo: [] },
  ]);
  setValue("");
};
