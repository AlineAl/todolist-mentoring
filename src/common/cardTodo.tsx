import React, { useEffect, useState } from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import { handleUpdate } from "../handlers/handleUpdate";
import { TodoType } from "../types";
import style from "./cardTodo.module.css";

interface ICardTodo {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todo: TodoType;
  handleRemove: (id: string) => void;
}

export default function CardTodo({ todo, handleRemove, setTodos }: ICardTodo) {
  const [todoId, setTodoId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>(todo.content);

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
          <input
            type="text"
            id="update"
            name="update"
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)}
          />
          <button
            onClick={() => {
              handleUpdate({ id: todo.id, value: updateValue, setTodos });
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
