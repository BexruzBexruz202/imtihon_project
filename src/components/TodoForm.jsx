import React from 'react'
import "../styles/TodoForm.css"
import axios from 'axios'

const TodoForm = () => {
    const api = "http://localhost:3001/todos"
    axios(api).then((Response) => console.log(Response.data)).catch()

    return(
        <div className="todo-form">
            <h1>Todo loyiha</h1>
        </div>
    )
}

export default TodoForm;