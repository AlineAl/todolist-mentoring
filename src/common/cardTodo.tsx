import React, { useEffect, useState } from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import { TodoType } from "../types";
import style from "../components/Todolist/todolist.module.css";

interface ICardTodo {
  el: TodoType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: number) => void;
  handleUpdate: (id: number, content: string, open: boolean) => void;
  todo: string;
}

export default function CardTodo({
  el,
  setOpen,
  open,
  handleChange,
  handleRemove,
  handleUpdate,
  todo,
}: ICardTodo) {
  const [todoId, setTodoId] = useState<number>(0);

  useEffect(() => {
    if (!open) {
      setTodoId(0);
    }
  }, [open]);

  return (
    <li key={el.id}>
      <span>{el.content}</span>
      <ImMinus className={style.minIcon} onClick={() => handleRemove(el.id)} />
      <ImPencil2
        onClick={() => {
          setTodoId(el.id);
          setOpen(!open);
        }}
      />
      {open && todoId === el.id ? (
        <>
          <input type="text" id="update" name="update" value={todo} onChange={handleChange} />
          <button
            onClick={() => {
              handleUpdate(el.id, todo, false);
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
