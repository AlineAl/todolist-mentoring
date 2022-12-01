import React, { useState } from "react";
import { ImMinus, ImPencil2 } from "react-icons/im";
import { TodoType } from "../types";
import style from "../components/Todolist/todolist.module.css";

interface ICardTodo {
  el: TodoType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (id: number) => void;
  handleUpdate: (id: number, content: string) => void;
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
  return (
    <li key={el.id}>
      <span>{el.content}</span>
      <ImMinus className={style.minIcon} onClick={() => handleRemove(el.id)} />
      <ImPencil2
        onClick={() => {
          setTodoId(el.id);
          setOpen(true);
        }}
      />
      {open && todoId === el.id && (
        <>
          <input type="text" id="update" name="update" value={todo} onChange={handleChange} />
          <button
            onClick={() => {
              handleUpdate(el.id, todo);
              setOpen(false);
            }}
          >
            Modifier
          </button>
        </>
      )}
    </li>
  );
}
