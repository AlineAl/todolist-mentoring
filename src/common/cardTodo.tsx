import React, { useEffect, useState } from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import { TodoType } from "../types";
import style from "./cardTodo.module.css";

interface ICardTodo {
  todo: TodoType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: number) => void;
  handleUpdate: (id: number, content: string, open: boolean) => void;
  value: string;
}

export default function CardTodo({
  todo,
  setOpen,
  open,
  handleChange,
  handleRemove,
  handleUpdate,
  value,
}: ICardTodo) {
  const [todoId, setTodoId] = useState<number>(0);

  useEffect(() => {
    if (!open) {
      setTodoId(0);
    }
  }, [open]);

  return (
    <li className={style.listContainer}>
      <span className={style.textListTodo}>{todo.content}</span>
      {/*      <ImMinus className={style.minIcon} onClick={() => handleRemove(todo.id)} />
      <ImPencil2
        onClick={() => {
          setTodoId(todo.id);
          setOpen(!open);
        }}
      />*/}
      {open && todoId === todo.id ? (
        <>
          <input type="text" id="update" name="update" value={value} onChange={handleChange} />
          <button
            onClick={() => {
              handleUpdate(todo.id, value, false);
              setOpen(false);
            }}
          >
            Modifier
          </button>
        </>
      ) : null}
    </li>
  );
}
