import React from "react";

interface IUseUpdate {
  array: any[];
  todo: any;
  setArray: any;
  id: number;
}

export default function useUpdate({ array, todo, setArray, id }: IUseUpdate) {
  const findIndex = array?.findIndex((el) => el.id === id);
  const newContent = todo.content;
  array[findIndex].content = newContent;
  setArray([...array]);
}
