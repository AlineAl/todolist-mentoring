import React from "react";
import style from "../Todolist/todolist.module.css";
import { ImPlus } from "react-icons/im";
import { TodoType } from "../../types";
import CardTodo from "../../common/CardTodo";
import { handleAdd } from "../../handlers/handleAdd";
import { handleUpdate } from "../../handlers/handleUpdate";
import { handleRemove } from "../../handlers/handleRemove";

export default function Todolist() {
  const [value, setValue] = React.useState<string>("");
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{new Intl.DateTimeFormat("fr-FR").format(new Date(Date.now()))}</h1>
      </div>
      <div className={style.inputContainer}>
        <div className={style.divInput}>
          <input
            className={style.inputTodolist}
            type="text"
            id="text"
            name="text"
            placeholder="Ajouter une tâche"
            value={value}
            onChange={handleChange}
          />
        </div>

        <ImPlus
          className={style.iconPlus}
          onClick={() => handleAdd({ setTodos, value, setValue })}
        />
      </div>

      <ul>
        {todos?.map((todo) => (
          <CardTodo
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            handleRemove={() => handleRemove({ id: todo.id, setTodos })}
          />
        ))}
      </ul>
    </div>
  );
}
