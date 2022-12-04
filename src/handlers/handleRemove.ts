import React from "react";
import { TodoType } from "../types";

interface IHandleRemove {
  array: TodoType[];
  setArray: React.Dispatch<React.SetStateAction<TodoType[]>>;
  id: number;
}

export const handleRemove = ({ id, setArray, array }: IHandleRemove) => {
  const newArray = array.filter((el) => el.id !== id);
  setArray([...newArray]);
};
