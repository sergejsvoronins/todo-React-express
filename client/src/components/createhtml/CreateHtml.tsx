import { useEffect, useState } from "react";
import { ITodo, ITodoData } from "../../models/ITodo";
import { InputSection } from "../Inputsection/Inputsection";
import { ToDoList } from "../Todolist/Todolist";
import "./CreateHtml.scss";
import { addTodo, deleteTodo, getTodos, updateTodoStatus, updateTodoTitle } from "../../services/todosService";


export const CreateHtml = () => {
    
    const [todos, updateTodos] = useState<ITodo[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const getData = async () => {
            let data = await getTodos();
            updateTodos(data);

        }
        if(!isLoading){
            getData();
            setLoading(true);
        }
    });
    const resetLoading = () => {
        setLoading(false);
    }
    const addTask = (task:ITodoData) => {
        addTodo(task);
        setLoading(false);
    }

    const deleteTask = (id:number) => {
        deleteTodo(id);
        setLoading(false);
    }

    const changeTodoStatus = (todo:ITodo) => {
        updateTodoStatus(todo);
        setLoading(false);
    } 
    const changeTodoTitle = (todo:ITodo) => {
        updateTodoTitle(todo);
        console.log(todo)
        setLoading(false);
    }


    console.log(todos);
    return (
        <div className="mainContainer">
            <h2>Todo-List</h2>
            <InputSection addTask={ addTask } resetLoading = { resetLoading } />
            <ToDoList todos={ todos } deleteTask = { deleteTask } changeTodoStatus = { changeTodoStatus } changeTodoTitle = { changeTodoTitle }/>
        </div>
    )
}