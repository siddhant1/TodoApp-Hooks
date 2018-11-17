import React from "react";

const Todo = ({ todo, del }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "10fr 1fr"
    }}
  >
    <span className="todo">{todo.text}</span>
    <button onClick={() => del(todo)}>&times;</button>
  </div>
);
export default Todo;
