import React from "react";
import { TodoType } from "../types";
import { ImMinus, ImPencil2 } from "react-icons/im";
import style from "../components/Todolist/todolist.module.css";

interface ICardTodo {
  array: TodoType[];
  todo: TodoType;
  useRemove: any;
  setArray: any;
  useUpdate: any;
}

export default function CardTodo({ array, todo, useRemove, setArray, useUpdate }: ICardTodo) {
  return (
    <ul>
      {array?.map((el) => {
        return (
          <>
            <li key={el.id}>
              <span>{el.content}</span>
              <ImMinus
                className={style.minIcon}
                onClick={() => useRemove({ array, setArray, id: el.id })}
              />
              <ImPencil2 onClick={() => useUpdate({ array, todo, setArray, id: el.id })} />
            </li>
          </>
        );
      })}
    </ul>
  );
}
