import React from "react";
import style from "./todolistBis.module.css";
import { ImMagicWand } from "react-icons/im";
import { TodoType } from "../../types";
import { handleAdd } from "../../handlers/handleAdd";
import CardTodoBis from "../../common/CardTodoBis";

export default function TodolistBis() {
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <div>
        <img src="./src/assets/Vagabond_Musashi.webp" alt="avatar" />
        <div className={style.inputContainer}>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Ajouter une tâche"
            value={value}
            onChange={handleChange}
          />

          <ImMagicWand
            className={style.iconPlus}
            onClick={() => handleAdd({ setTodos, value, setValue })}
          />
        </div>
      </div>

      <CardTodoBis setTodos={setTodos} />
    </div>
  );
}
