import React from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import Todolist from "./components/TodoList"
import Todoitem from "./components/TodoItem"
import Filter from "./components/FilterBar"

const App = () =>{
  return (
    <div className={`w-[500px] flex`}>
      <TodoForm />
      <Todolist />
      <Filter />
    </div>
  )
}

export default App;