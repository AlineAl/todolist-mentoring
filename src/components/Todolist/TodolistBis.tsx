import React from "react";
import style from "./todolistBis.module.css";
import { ImAlarm, ImCircleDown, ImFlickr, ImMagicWand, ImStarEmpty } from "react-icons/im";
import { TodoType } from "../../types";
import { handleAdd } from "../../handlers/handleAdd";
import { handleUpdate } from "../../handlers/handleUpdate";
import { handleRemove } from "../../handlers/handleRemove";

export default function TodolistBis() {
  const [value, setValue] = React.useState<string>("");
  const [todos, setTodos] = React.useState<TodoType[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

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

      <div className={style.card}>
        <div className={style.flex}>
          <h3>Landing Page Design</h3>
          <ImFlickr />
        </div>
        <div className={style.date}>
          <p>Demain 8h00</p>
        </div>
        <div>
          <ImStarEmpty className={style.iconCard} />
          <ImAlarm className={style.iconCard} />
        </div>
        <ImCircleDown className={style.iconArrowDown} />
      </div>
      <ul className={style.listContainer}>
        <li>Landing page wireframe</li>
        <li>Survey users</li>
        <li>Design feedback</li>
      </ul>

      {/*      <ul>
        {todos?.map((todo) => (
          <CardTodoBis
            key={todo.id}
            todo={todo}
            setOpen={setOpen}
            open={open}
            handleChange={handleChange}
            handleRemove={() => handleRemove({ id: todo.id, setTodos })}
            handleUpdate={() => handleUpdate({ id: todo.id, value, setTodos })}
            value={value}
          />
        ))}
        </ul>*/}
    </div>
  );
}
