import React from "react";
import { TodoType } from "../types";

interface IHandleUpdate {
  array: TodoType[];
  setArray: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  value: string;
  open: boolean;
}

export const handleUpdate = ({ array, id, value, setArray, setOpen, open }: IHandleUpdate) => {
  const newArray = array.map((item) => {
    if (item.id === id) {
      return { ...item, content: value };
    }
    return item;
  });
  setArray(newArray);
  setOpen(open);
};
