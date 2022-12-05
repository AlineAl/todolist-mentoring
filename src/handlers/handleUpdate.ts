import React from "react";
import { TodoType } from "../types";

interface IHandleUpdate {
  array: TodoType[];
  setArray: React.Dispatch<React.SetStateAction<TodoType[]>>;
  id: number;
  value: string;
}

export const handleUpdate = ({ array, id, value, setArray }: IHandleUpdate) => {
  const newArray = array.map((item) => {
    if (item.id === id) {
      return { ...item, content: value };
    }
    return item;
  });
  setArray(newArray);
};
