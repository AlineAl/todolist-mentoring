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

export default function CardTodoBis({
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

  return <li></li>;
}
