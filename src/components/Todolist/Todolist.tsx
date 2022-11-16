import React from "react";
import style from "../Todolist/todolist.module.css";
import { ImPlus } from "react-icons/im";
import { TodoType } from "../../types";
import useCreate from "../../hooks/useCreate";
import useRemove from "../../hooks/useRemove";
import useUpdate from "../../hooks/useUpdate";
import CardTodo from "../../common/cardTodo";

export default function Todolist() {
  const [id, setId] = React.useState(0);
  const [todo, setTodo] = React.useState<TodoType>({ id: id, content: "" });
  const [array, setArray] = React.useState<TodoType[]>([]);

  const handleIncrement = () => {
    setId(id + 1);
  };

  const handleChange = (e: { target: { value: string } }) => {
    let content = e.target.value;
    setTodo({ id: id, content });
  };

  return (
    <div className={style.container}>
      <h1>Todo List</h1>
      <div className={style.inputContainer}>
        <input type="text" id="text" name="text" value={todo.content} onChange={handleChange} />
        <ImPlus
          onClick={() => useCreate({ todo, handleIncrement, setArray, setTodo, array, id })}
        />
      </div>

      <CardTodo
        array={array}
        todo={todo}
        useRemove={useRemove}
        setArray={setArray}
        useUpdate={useUpdate}
      />
    </div>
  );
}
