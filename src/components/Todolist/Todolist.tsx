import React from "react";
import style from "../Todolist/todolist.module.css";
import { ImPlus } from "react-icons/im";
import { TodoType } from "../../types";
import CardTodo from "../../common/CardTodo";
import { handleAdd } from "../../handlers/handleAdd";
import { handleUpdate } from "../../handlers/handleUpdate";

export default function Todolist() {
  const [todo, setTodo] = React.useState<string>("");
  const [array, setArray] = React.useState<TodoType[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 0 ? setTodo(e.target.value) : setTodo("");
  };

  const handleUpdate = (id: number, content: string) => {
    const findTodo = array.find((item) => item?.id === id);
    findTodo ? (findTodo.content = content) : null;
    setArray([...array]);
    setOpen(false);
  };

  const handleRemove = (id: number) => {
    const newArray = array.filter((el) => el.id !== id);
    setArray([...newArray]);
  };

  return (
    <div className={style.container}>
      <h1>Todo List</h1>
      <div className={style.inputContainer}>
        <input type="text" id="text" name="text" value={todo} onChange={handleChange} />
        <ImPlus onClick={() => handleAdd({ array, setArray, todo, setTodo })} />
      </div>

      <ul>
        {array?.map((el) => {
          return (
            <CardTodo
              el={el}
              setOpen={setOpen}
              open={open}
              handleChange={handleChange}
              handleRemove={handleRemove}
              handleUpdate={handleUpdate}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
}
