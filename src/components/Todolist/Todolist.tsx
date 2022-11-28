import React from "react";
import style from "../Todolist/todolist.module.css";
import { ImMinus, ImPencil2, ImPlus } from "react-icons/im";
import useRemove from "../../hooks/useRemove";
import useUpdate from "../../hooks/useUpdate";
import CardTodo from "../../common/cardTodo";

export default function Todolist() {
  const [todo, setTodo] = React.useState<string>("");
  const [array, setArray] = React.useState<any[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 0 ? setTodo(e.target.value) : setTodo("");
  };

  const handleAdd = () => {
    const id = array.length;
    setArray([...array, { content: todo, id: id + 1 }]);
    setTodo("");
  };

  const handleUpdate = (id: number, content: string) => {
    const findTodo = array.find((item) => item.id === id);
    findTodo.content = content;
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
        <ImPlus onClick={handleAdd} />
      </div>

      <ul>
        {array?.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.content}</span>
              <ImMinus className={style.minIcon} onClick={() => handleRemove(el.id)} />
              <ImPencil2 onClick={() => setOpen(true)} />
              {open && (
                <>
                  <input
                    type="text"
                    id="update"
                    name="update"
                    value={todo}
                    onChange={handleChange}
                  />
                  <button onClick={() => handleUpdate(el.id, todo)}>Modifier</button>
                </>
              )}
            </li>
            /*<CardTodo
              todo={el.content}
              id={el.id}
              useRemove={useRemove}
              setArray={setArray}
              useUpdate={useUpdate}
            />*/
          );
        })}
      </ul>
    </div>
  );
}
