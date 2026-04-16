import React from "react"
import "../styles/TodoItem.css"
import axios from "axios"
const api = 'http://localhost:3001/todos'

const TodoItem = () => { 

    const add = () => {
        axios.get(api).then(Response)
    }   
    return(
        <div className="flex w-[100%] h-[100vh] items-center justify-start p-10 flex-col">
            <input type="text" placeholder="Writing text"/>
            <input type="time"/>
            <button className={"w-500px"} onClick={add}>Add</button>
            <button>Cancel</button>
        </div>
    )
}

export default TodoItem;