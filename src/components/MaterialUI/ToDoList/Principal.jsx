import { useState } from "react"
import HomeToDo from "./HomeToDo"
import ToDoItem  from "./ToDoItem"
import { List } from "@mui/material"
import {tarefa} from "./HomeToDo"

export const Principal = ({tarefa}) =>{
    const [todos, setTodos] = useState(['sada'])

    const addTask = (tarefa) =>{
        setTodos(...todos, tarefa);
    }
    return(
        <>
            <HomeToDo />
            <ToDoItem />
        </>
    )
}