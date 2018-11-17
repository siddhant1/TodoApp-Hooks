import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import uuid from "uuid";

function Todos(params) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo : Learn about React" },
    { id: 2, text: "Todo : Meet friend for lunch" },
    { id: 3, text: "Todo : Build really cool todo app" }
  ]);
  const [todo, setTodo] = useState("Todo : ");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("called");
    document.title = `You have added ${count} tasks`;
  },[count]);
  const removeTodo = todo => {
    let todosCopy = [...todos];
    todosCopy = todosCopy.filter(t => {
      return todo.id !== t.id;
    });
    setTodos(todosCopy);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo del={removeTodo} key={todo.id} index={index} todo={todo} />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={e => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const todoAdd = {
              id: uuid(),
              text: todo
            };
            let newTodos = [...todos];
            newTodos = newTodos.concat(todoAdd);
            setTodos(newTodos);
            setCount(count + 1);
            setTodo("Todo : ");
          }}
        >
          Add To tasks
        </button>
      </div>
    </div>
  );
}

export default Todos;
