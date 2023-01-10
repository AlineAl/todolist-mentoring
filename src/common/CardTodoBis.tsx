import React, { useEffect, useState } from "react";
import { ImAlarm, ImCircleDown, ImFlickr, ImPlus, ImStarEmpty } from "react-icons/im";
import style from "./cardTodoBis.module.css";
import { handleUpdate } from "../handlers/handleUpdate";
import { TodoBisType, TodoType } from "../types";

interface ICardTodoBis {
  setTodos: React.Dispatch<React.SetStateAction<TodoBisType[]>>;
  todo: TodoBisType;
  handleRemove?: (id: string) => void;
}

export default function CardTodoBis({ todo, handleRemove, setTodos }: ICardTodoBis) {
  const [todoId, setTodoId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>();

  useEffect(() => {
    if (!open) {
      setTodoId("");
    }
  }, [open]);

  return (
    <>
      <div className={style.card}>
        <div className={style.flex}>
          <h3>{todo.content}</h3>
          <ImFlickr />
        </div>
        <div className={style.date}>
          <p>{new Intl.DateTimeFormat("fr-FR").format(new Date(todo?.date))}</p>
        </div>
        <div>
          <ImStarEmpty className={style.iconCard} />
          <ImAlarm className={style.iconCard} />
        </div>
        <ImCircleDown
          onClick={() => setOpen(!open)}
          className={`${style.iconArrowDown} ${
            open ? style.iconArrowRotateUp : style.iconArrowRotateDown
          }`}
        />
      </div>
      <ul className={`${style.listContainer} ${open ? style.animationDown : style.animationUp}`}>
        <li className={style.addElementList}>
          <ImPlus className={style.icon} /> Ajouter une sous-tâche
        </li>
      </ul>
    </>
  );
}
