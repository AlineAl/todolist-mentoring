import React from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import style from "../components/Todolist/todolist.module.css";

interface ICardTodo {
  todo: string;
  useRemove: any;
  setArray: any;
  useUpdate: any;
  id: number;
}

export default function CardTodo({ todo, id, useRemove, setArray, useUpdate }: ICardTodo) {
  return (
    <li key={id}>
      <span>{todo}</span>
      <ImMinus className={style.minIcon} onClick={() => useRemove({ setArray, id: id })} />
      <ImPencil2 onClick={() => useUpdate({ todo, setArray, id: id })} />
    </li>
  );
}
