import React, { useEffect, useState } from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import { TodoType } from "../types";
import style from "./cardTodo.module.css";

interface ICardTodo {
  todo: TodoType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: string) => void;
  handleUpdate: (id: string, content: string, open: boolean) => void;
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
  const [todoId, setTodoId] = useState<string>("");

  useEffect(() => {
    if (!open) {
      setTodoId("");
    }
  }, [open]);

  return (
    <li className={style.listContainer}>
      <div className={style.flex}>
        <span className={style.textListTodo}>{todo.content}</span>
        <div className={style.flex}>
          <div onClick={() => handleRemove(todo.id)} className={style.minIcon}>
            <ImMinus />
          </div>
          <div className={style.pencilIcon}>
            <ImPencil2
              onClick={() => {
                setTodoId(todo.id);
                setOpen(!open);
              }}
            />
          </div>
        </div>
      </div>
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
