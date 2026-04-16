import React from "react";
import "../styles/TodoList.css";
import Item from "./TodoItem"

const TodoList = () => {
    const AddTodo = () =>{
        <TodoItem />
    }

  return <div className="list_container">
    <Item />
  </div>;
}

export default TodoList;