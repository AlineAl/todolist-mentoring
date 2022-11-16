import React from "react";
import { TodoType } from "../types";

interface IUseRemove {
  array: TodoType[];
  setArray: any;
  id: number;
}

export default function useRemove({ array, setArray, id }: IUseRemove) {
  const findIndex: number = array?.findIndex((el) => el.id === id);
  array.splice(findIndex, 1);
  setArray([...array]);
}
